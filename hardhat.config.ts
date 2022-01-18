import {HardhatUserConfig} from 'hardhat/types';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
      "metadata": {
        "useLiteralContent": true
      }
    },
    overrides: {
      "uniswapv2/*": {
        version: "0.6.12",
        settings: { 
          "outputSelection": {
            "*": {
              "*": [
                "evm.bytecode.object",
                "evm.deployedBytecode.object",
                "abi",
                "evm.bytecode.sourceMap",
                "evm.deployedBytecode.sourceMap",
                "metadata"
              ],
              "": ["ast"]
            }
          },
          "evmVersion": "istanbul",
          "optimizer": {
            "enabled": true,
            "runs": 999999
          }      
        }
      }
    }
  },
  paths: {
    sources: 'src',
  },
};

export default config;