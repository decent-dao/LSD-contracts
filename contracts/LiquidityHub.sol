//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract LiquidityHub {
    using SafeERC20 for IERC20;

    address streamCreator;
    mapping(address => address) xTokenTodToken;


    event AmountClaimed(address claimer, uint256 amount, address xToken, address dToken);
    function initialize(address _streamCreator) public {
        streamCreator = _streamCreator;
    } 

    function addStream(address xtoken, address dtoken) public {
        xTokenTodToken[xtoken] = dtoken;
    }

    function cliamAmount(address xToken, address dToken) public {
        uint totalXAmount = IERC20(xToken).balanceOf(address(this));
        uint userDAmount = IERC20(dToken).balanceOf(msg.sender);

        uint userXClaim;
        userDAmount <= totalXAmount ? 
        userXClaim = userDAmount :
        userXClaim = totalXAmount;

        
        IERC20(dToken).safeTransferFrom(msg.sender, address(0), (userXClaim * _fairClaim()));
        IERC20(xToken).safeTransfer(msg.sender, (userXClaim * _fairClaim()));
        emit AmountClaimed(msg.sender, userXClaim, xToken, dToken);

    }

    function _fairClaim() public pure returns(uint) {
        return 1;
    }
    
}
