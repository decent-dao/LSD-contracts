// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract DToken is Initializable, ERC20Upgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(string memory _name, string memory _symbol, address[] memory _holders, uint[] memory _allocations) initializer public {
        __ERC20_init(_name, _symbol);
        for(uint i; i<_holders.length; i++) {
            _mint(_holders[i], _allocations[i]);
        }
    }
}