/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = process.env.TSD_PRIVATE_KEY;
const infuraId = process.env.TSD_INFURA_ID;
const etherscanKey = "79MEFXEYGQEZPAZ6EYR6CTYXJ343WY1XT8";
const mnemonic = "minor ordinary kind half about ahead rib gold guilt still output cushion";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 6721975,
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed1.binance.org'),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    //Another network with more advanced options...
    // mainnet: {
    //   provider: () => new HDWalletProvider(privateKey, 'https://mainnet.infura.io/v3/' + infuraId),
    //   network_id: 1,          // Mainnet's id
    //   gas: 6700000,           // Gas sent with each transaction (default: ~6700000)
    //   gasPrice: 100000000000,  // 100 gwei (in wei) (default: 100 gwei)
    //   timeoutBlocks: 1440,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // https://ropsten.infura.io/v3/615e68d7dfe84edbb6d6a365127f2fbe
    // ropsten: {
    //   provider: () => new HDWalletProvider("505e79ffc772bca980bf32c54ff0c77a2922f004ea61fdb1cf9d6f54b80b86dc", 'https://ropsten.infura.io/v3/' + '615e68d7dfe84edbb6d6a365127f2fbe'),
    //   network_id: 3,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    // rinkeby: {
    //   provider: () => new HDWalletProvider("505e79ffc772bca980bf32c54ff0c77a2922f004ea61fdb1cf9d6f54b80b86dc", 'https://rinkeby.infura.io/v3/615e68d7dfe84edbb6d6a365127f2fbe'),
    //   network_id: 4,       // rinkeby's id
    //   gas: 5500000,        // rinkeby has a lower block limit than mainnet
    //   confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    // rinkeby: {
    //   provider: () =>
    //     new HDWalletProvider({
    //       mnemonic: {
    //         phrase: rinkebyMnemonic
    //       },
    //       providerOrUrl: "https://rinkeby.infura.io/v3/bfd2e040e5c340a5a9e253945e3f669b'",
    //       numberOfAddresses: 1,
    //       shareNonce: true,
    //     }),
    //   network_id: '4',
    // }

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.17",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
      //  evmVersion: "byzantium"
      // }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: etherscanKey,
  }
};
