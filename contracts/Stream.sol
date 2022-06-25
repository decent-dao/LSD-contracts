//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import "./StreamCreator.sol";
// import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

import {ISuperfluid} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol"; //"@superfluid-finance/ethereum-monorepo/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import {IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IConstantFlowAgreementV1.sol";

import {CFAv1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFAv1Library.sol";

contract Stream is Initializable{
    using CFAv1Library for CFAv1Library.InitData;

    //initialize cfaV1 variable
    uint256 public id;
    StreamCreator public streamCreator;
    CFAv1Library.InitData public cfaV1;

    function initialize(
        uint _id,
        ISuperfluid _host,
        ISuperfluidToken _token,
        address _receiver,
        address _streamCreator,
        int96 _flowRate
    ) external initializer {
        id = id;
        streamCreator = StreamCreator(_streamCreator);

        //initialize InitData struct, and set equal to cfaV1
        cfaV1 = CFAv1Library.InitData(
            _host,
            //here, we are deriving the address of the CFA using the host contract
            IConstantFlowAgreementV1(
                address(
                    _host.getAgreementClass(
                        keccak256(
                            "org.superfluid-finance.agreements.ConstantFlowAgreement.v1"
                        )
                    )
                )
            )
        );
        _createFlow(_token, _receiver, _flowRate);
    }

    function _createFlow(
        ISuperfluidToken token,
        address receiver,
        int96 flowRate
    ) private {
        cfaV1.createFlow(receiver, token, flowRate);
    }
}
