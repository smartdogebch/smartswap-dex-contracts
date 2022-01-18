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
  },
  paths: {
    sources: 'src',
  },
};

export default config;