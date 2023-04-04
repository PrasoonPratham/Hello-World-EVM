require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    eclipse: {
      url: "https://your-rpc-url",
      accounts: ["0xYourPrivateKey"],
    },
  },
};
