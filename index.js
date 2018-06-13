module.exports = {
  CryptoDollar: require('./cryptodollar-a/CryptoDollar.json'),
  CryptoFiatHub: require('./cryptodollar-a/CryptoFiatHub.json'),
  Rewards: require('./cryptodollar-a/Rewards.json'),
  Store: require('./cryptodollar-a/Store.json'),
  CryptoDollarBis: {
    CryptoDollar: require('./cryptodollar-b/CryptoDollar.json'),
    CryptoFiatHub: require('./cryptodollar-b/CryptoFiatHub.json'),
    Rewards: require('./cryptodollar-b/Rewards.json'),
    Store: require('./cryptodollar-b/Store.json')
  },
  dex: {
    Exchange: require('./dex/Exchange.json'),
    Token1: require('./dex/Token1.json'),
    Token2: require('./dex/Token2.json')
  }
}