const hre = require("hardhat");

async function main() {
    // Compile the contract
    const Auth = await hre.ethers.getContractFactory("Auth");
    
    // Deploy the contract
    const auth = await Auth.deploy();
    await auth.waitForDeployment();  // Fix: Use `waitForDeployment()` instead of `deployed()`

    // Get deployed contract address
    console.log("Contract deployed to:", await auth.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
