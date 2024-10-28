require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.2",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  // namedAccounts: {
  //   deployer: {
  //     default: 0, // here this will by default take the first account as deployer
  //     1: 0, // similarly on mainnet (network 1) it will take the first
  //     //account as deployer. Note though that depending on how hardhat network are
  //     //configured, the account 0 on one network can be different than on another
  //   },
  // },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
};
