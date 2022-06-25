//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract LiquidityHub {
    using SafeERC20 for IERC20;

    function cliamAmount(address xtoken, address dtoken) public {
        uint totalXAmount = IERC20(xtoken).balanceOf(address(this));
        uint userDAmount = IERC20(dtoken).balanceOf(msg.sender);

        uint userXClaim;
        userDAmount <= totalXAmount ? 
        userXClaim = userDAmount :
        userXClaim = totalXAmount;

        IERC20(xtoken).safeTransfer(msg.sender, (userXClaim * _fairClaim()));
    }

    function _fairClaim() public pure returns(uint) {
        return 1;
    }
    
}
