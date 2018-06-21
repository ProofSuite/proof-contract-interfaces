module.exports = {
  CryptoDollar: require('./cryptodollar-a/CryptoDollar.json'),
  CryptoFiatHub: require('./cryptodollar-a/CryptoFiatHub.json'),
  Rewards: require('./cryptodollar-a/Rewards.json'),
  Store: require('./cryptodollar-a/Store.json'),
  Exchange: require('./dex/Exchange.json'),
  ERC20Token: require('./dex/Token1.json'),
  WETH: require('./dex/WETH.json'),
  Token1: require('./dex/Token1.json'),
  Token2: require('./dex/Token2.json'),
  Token3: require('./dex/Token3.json'),
  CryptoDollarBis: {
    CryptoDollar: require('./cryptodollar-b/CryptoDollar.json'),
    CryptoFiatHub: require('./cryptodollar-b/CryptoFiatHub.json'),
    Rewards: require('./cryptodollar-b/Rewards.json'),
    Store: require('./cryptodollar-b/Store.json')
  }
}