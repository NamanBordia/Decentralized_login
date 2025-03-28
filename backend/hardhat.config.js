require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/VXrsduTm4N_WCnsM6QNlRJupkBUzDK9W",
      accounts:["0x890b94e8a3d90f074109414872450c49b3dfa26a7e998d2a13ea6edb5eb66452"]

    }
  }
};
