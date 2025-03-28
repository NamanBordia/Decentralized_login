// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Auth {
    mapping(address => bool) private registeredUsers;

    function register() public {
        require(!registeredUsers[msg.sender], "User already registered!");
        registeredUsers[msg.sender] = true;
    }

    function login() public view returns (bool) {
        return registeredUsers[msg.sender];
    }
}
