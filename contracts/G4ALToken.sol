// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract G4ALToken is ERC20, Ownable {
    address public ggtAddress;
    uint256 public maxSupply = 10000000000 ether;

    constructor(address g4al_) ERC20("G4AL Token", "G4AL") {
        ggtAddress = g4al_;
        _mint(ggtAddress, maxSupply);
    }
}
