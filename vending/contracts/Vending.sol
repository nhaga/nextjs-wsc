// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract VendingMachine {
    address public m3s6 = 0x5fA38625dbd065B3e336e7ef627B06a8e6090e8F;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function deposit(uint256 _amount) public returns (bool) {
        require(
            IERC20(m3s6).transferFrom(msg.sender, address(this), _amount),
            "Transfer failed"
        );
        return true;
    }

    function withdraw(uint256 _amount) public returns (bool) {
        require(msg.sender == owner, "Only owner can withdraw");
        require(IERC20(m3s6).transfer(msg.sender, _amount), "Transfer failed");
        return true;
    }

    function buyTokens() public payable returns (bool) {
        require(
            IERC20(m3s6).transfer(msg.sender, msg.value),
            "Transfer failed"
        );
        return true;
    }

    function sellTokens(uint256 _amount) public payable returns (bool) {
        require(
            IERC20(m3s6).transferFrom(msg.sender, address(this), _amount),
            "Transfer failed"
        );
        payable(msg.sender).transfer(_amount);
        return true;
    }
}
