// 

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_VXDIidQyzvMLe5-7fwPi0o2NjOevOUi',
      accounts: ['ad8f25ee12f69889f7b90c41f2d673cb6357acd54e4ce0ed5c392dc0804f5e8f']
    }
  }
}