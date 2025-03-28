# Decentralized Login System using Blockchain

## Overview
This project is a **decentralized authentication system** built on the Ethereum blockchain. Users can register and log in securely using their **MetaMask wallet**. The authentication data is stored on the blockchain, ensuring security and decentralization.

## Features
- **Wallet-based authentication** using MetaMask
- **User registration and login** stored on the Ethereum blockchain
- **Smart contract-powered authentication**
- **Decentralized and tamper-proof** authentication mechanism

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Blockchain Interaction:** Ethers.js
- **Smart Contracts:** Solidity
- **Deployment & Testing:** Hardhat

## Project Structure
```
Decentralized_login/
│── index.html          # Frontend UI
│── style.css           # Styling for the frontend
│── script.js           # Handles blockchain interaction
│── auth.sol            # Solidity smart contract for authentication
│── deploy.js           # Script for deploying the smart contract
│── README.md           # Project documentation
```

## Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MetaMask** browser extension
- **Hardhat** for contract deployment

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/NamanBordia/Decentralized_login.git
cd Decentralized_login
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Compile the Smart Contract
```sh
npx hardhat compile
```

### 4. Deploy the Smart Contract
Run the deployment script on a local Hardhat network:
```sh
npx hardhat run deploy.js --network localhost
```

Or deploy to an Ethereum testnet like Sepolia (update Hardhat config first):
```sh
npx hardhat run deploy.js --network sepolia
```

### 5. Start the Application
Simply open `index.html` in a browser and connect your MetaMask wallet.

## Usage
1. Click **"Connect Wallet"** to connect your MetaMask.
2. Click **"Signup"** to register your wallet address on the blockchain.
3. Click **"Login"** to verify your registration status.

## Smart Contract (auth.sol)
```solidity
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
```

## Troubleshooting
- **Error: "MetaMask is not installed"** – Ensure you have the MetaMask extension installed.
- **Error: "Failed to connect wallet"** – Refresh the page and try reconnecting MetaMask.
- **Error: "Transaction failed"** – Ensure you have enough ETH for gas fees.

## Future Improvements
- Implement password-less authentication with **signature verification**
- Add **smart contract security measures** (e.g., access control, event logging)
- Deploy on **Polygon or other L2 solutions** for reduced gas fees

## License
This project is licensed under the **MIT License**.

## Author
Developed by **Naman Bordia**. Feel free to contribute and improve this project!

