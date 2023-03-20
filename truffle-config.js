/** @format */

const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
  networks: {
    develop: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // match any network
      websockets: true,
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(
          '320c6ca026d3e4338a0569dedfa1c4faec7465235b32810c4e9f80f9969a296d',
          'https://app.zeeve.io/shared-api/poly/437e5102a5be36c3216c3da7a3bb7dedfb81282197494209'
        ),
      network_id: '80001',
      gasPrice: 1000000,
      networkCheckTimeout: 10000,
      timeoutBlocks: 200
    },
  },
  // compilers: {
  //   solc: {
  //     version: "^0.8.0",
  //   },
  // },
};
