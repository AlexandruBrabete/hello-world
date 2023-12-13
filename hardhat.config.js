/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: 'https://eth-sepolia.g.alchemy.com/v2/SDdUoCOpk84pxi8hc0Hco9swev-5eGqX',
         accounts: [`0xa69c1a24a556fcfe5680cfc0189e12acb040d3173ce3bd162774aa8e5716265d`]
      }
   },
}