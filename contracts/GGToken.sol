// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GGToken is ERC20, Ownable {
    address public ggtAddress;
    uint256 public maxSupply = 10000000000 ether;

    constructor(address ggt_) ERC20("Game Gold Token", "GGT") {
        ggtAddress = ggt_;
        _mint(ggtAddress, maxSupply);
    }
}
