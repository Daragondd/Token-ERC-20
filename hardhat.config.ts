import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import 'solidity-coverage';
import "@nomiclabs/hardhat-ethers";

import "./task/accounts";
import "./task/transfer";
import "./task/approve";
import "./task/transferFrom";
import "./task/balance";
import dotenv from "dotenv";
dotenv.config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  plugins: ["solidity-coverage"],
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  },
};
