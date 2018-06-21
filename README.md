##Proof AMP Smart-Contract Interfaces Repository

To install the corresponding npm repository, use the github remote url:
```
npm install https://github.com/ProofSuite/proof-contract-interfaces
```

## Decentralized Exchange

### Contracts deployed on Private Geth Chain

* Exchange: 0x7cc4b1851c35959d34e635a470f6b5c43ba3c9c9
* Migrations: 0x0f5ea0a652e851678ebf77b69484bfcd31f9459b
* Token1: 0xc4c7497fbe1a886841a195a5d622cd60053c1376
* Token2: 0x9c47796bc1e469a60dcbf680273ff011e45a1327
* Token3: 0x69bd17ead2202072ae4a117b036305a94ccf2e06
* WETH: 0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a


## CryptoDollar (Version with Oraclize Price Feed)

### Contract deploed on Private Geth Chain

* CryptoDollar: 0x8e68c083c6f7784bf35a12d5a31f7587274d407c
* CryptoDollarStorageProxy: 0xfc20d5e44f0032b7fb079b4e868d36b698c956b8
* CryptoFiatHub: 0xf69a1e542cca358e90897884366117675b0cbf7b
* CryptoFiatStorageProxy: 0xcef76edf30bbd5d0341edb44b2a6bc0b9c551a63
* Migrations: 0x32c65046aaba7aa7ebb81bdab12af5e2d9b9c44c
* ProofToken: 0xb662559bcf3450d113819975e911de822fa6eccc
* Rewards: 0xc89bba87b12f6ca19652d6de2fe0846a20f8b4e7
* RewardsStorageProxy: 0xed5f584bef4d6244b1f88163f3f5774cdec60dcf
* SafeMath: 0xe882843d51a67b0fe2fc2c793bdb1562c0707895
* Store: 0x2bc811ef0dae8b1ecefe8e43664c4536e5c48bac


### Contracts deployed on Rinkeby:

* CryptoFiatHub: 0xd0de1979e04b70733f8335133630c05e98d059cd
* CryptoDollar: 0x3961891863867e6a700170cab634e32795935669
* Rewards: 0xd4e3ae546e43cbd15750274f1a1bf89a9ce90e00
* CryptoDollarStorageProxy: 0x4d68391b5ae96b5c48541d3741e7075ca3827a58
* CryptoFiatStorageProxy: 0xc04eeab76afdc11c70e5430865d810fb77f50b81
* ProofToken: 0x34fa90febc34a0577638873d04efcbf1152c0d28
* RewardsStorageProxy: 0xe380908e16410d17c44e64d857f21609a70d51db
* SafeMath: 0xf98b6ee906c1c618755d06e1e6471647f59bae7a
* Store: 0xd224265b224e693dd7163415b34c0b7d275f2f20



## CryptoDollar (Version with Medianizer Price Feed)

TODO


## Usage

#### Import an exchange contract
```
import { Exchange } from 'proof-contracts-interfaces'
```

- The abi of the contract is accessible through the .abi field of the provided object. 
- If required, the address of the contract is accessible through the address field of the provided object

- Note: This only imports the contract interfaces and you will need to create the contract instance yourself by using
an appropriate library. 

#### Import any of the ERC20 Tokens 
```
import { ERC20Token } from 'proof-contract-interfaces'
```

In this case the address field will not be set and you will need to provide your own address when instantiating 
the contract

#### Import a specific Token
```
import { Token1 } from 'proof-contract-interfaces'
```

The address of that token will then be accessible through the .address field. There are currently three 
tokens deployed with a predefined amount that has been sent to each of the main addresses.

#### Import WETH Contract

```
import { WETH } from 'proof-contract-interfaces'
```

### Network ID

The network ID for this test network is 1000
