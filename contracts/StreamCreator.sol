//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import "@superfluid-finance/ethereum-contracts/contracts/superfluid/SuperToken.sol";
import {IERC20, SuperTokenFactory, ISuperTokenFactory} from "@superfluid-finance/ethereum-contracts/contracts/superfluid/SuperTokenFactory.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "./Stream.sol";
import "./DToken.sol";

// import "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperTokenFactory.sol";

contract StreamCreator {
    using SafeERC20 for IERC20;
    using CountersUpgradeable for CountersUpgradeable.Counter;
    CountersUpgradeable.Counter private _projectIdCounter;

    struct StreamDetails {
        uint256 amount;
        uint256 startTime;
        uint256 maturityTime;
    }
    struct Round {
        IERC20 _pToken;
        address _dTokenImpl;
        string _xName;
        string _xSymbol;
        string _dName;
        string _dSymbol;
        address _streamImpl;
        address[] _investors;
        uint256[] _allocations;
        uint256[] _maturityTime;
    }
    mapping(uint256 => StreamDetails[]) public idToRound;
    mapping(address => uint256) public streamToId;
    address host;
    address streamHub;
    SuperTokenFactory tokenWrapperFactory;

    event RoundCreaated(
        address _pToken,
        address _xToken,
        address _dToken,
        address[] _investors,
        uint256[] _allocations
    );

    function initialize(
        address _host,
        address _streamHub,
        SuperTokenFactory _tokenWrapperFactory
    ) public {
        host = _host;
        streamHub = _streamHub;
        tokenWrapperFactory = _tokenWrapperFactory;
    }

    function CreateRound(Round memory round) public {
        address xToken = address(
            _createXToken(round._pToken, round._xName, round._xSymbol)
        ); // Superfluid Streaming Token
        address dToken = _createDToken( // Mint Derivative tokens to holders
            xToken,
            round._dTokenImpl,
            round._investors,
            round._allocations,
            round._dName,
            round._dSymbol
        );

        for (uint256 i; i < round._investors.length; i++) {
            address _stream = _createStream(
                address(round._pToken),
                round._streamImpl,
                xToken
            ); // Create Stream Contract
            round._pToken.safeTransferFrom(
                msg.sender,
                _stream,
                round._allocations[i]
            );

            round._pToken.approve(xToken, round._allocations[i]);
            SuperToken(xToken).upgrade(round._allocations[i]); // Transfer xTokens before streaming starts

            uint256 _id = _projectIdCounter.current();
            _projectIdCounter.increment();

            Stream(_stream).initialize( // Start Stream
                _id,
                ISuperfluid(host),
                ISuperfluidToken(xToken),
                streamHub,
                _stream,
                1000 // todo:flowrate
            );

            // Create Streaming
            idToRound[_id].push(
                StreamDetails(
                    round._allocations[i],
                    block.timestamp,
                    round._maturityTime[i]
                )
            );
        }

        emit RoundCreaated(
            address(round._pToken),
            xToken,
            dToken,
            round._investors,
            round._allocations
        );
    }

    // X token - Superfluid deravative token used for streaming
    function _createXToken(
        IERC20 _ptoken,
        string memory _name,
        string memory _symbol
    ) public returns (ISuperToken _xToken) {
        bytes4 FUNC_SELECTOR = bytes4(
            keccak256("createERC20Wrapper(IERC20,uint8,string,string)")
        );

        bytes memory data = abi.encodeWithSelector(
            FUNC_SELECTOR,
            _ptoken,
            0,
            _name,
            _symbol
        );
        (bool success, bytes memory returndata) = address(tokenWrapperFactory)
            .call{value: 0}(data);
        _xToken = ISuperToken(abi.decode(returndata, (address)));
    }

    function _createStream(
        address _ptoken,
        address _impl,
        address _xToken
    ) public returns (address _stream) {
        // Better salt value
        _stream = Clones.cloneDeterministic(
            _impl,
            keccak256(abi.encodePacked(_ptoken))
        );
    }

    // D token - Liquidity token used for vesting
    function _createDToken(
        address _ptoken,
        address _dImpl,
        address[] memory _investors,
        uint256[] memory _allocations,
        string memory _name,
        string memory _symbol
    ) public returns (address _dToken) {
        // Better salt value
        _dToken = Clones.cloneDeterministic(
            _dImpl,
            keccak256(abi.encodePacked(_ptoken))
        );
        DToken(_dImpl).initialize(_name, _symbol, _investors, _allocations);
    }
}
