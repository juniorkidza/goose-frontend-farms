import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WAD',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      42: '0x43B53B7a97652030b19B2Ab1Ae6eeF098d5f5175',
      4: '0x64d94b153165bb8db2af14339c8390f53bfbb397', // SPG-BUSD
    },
    tokenSymbol: 'WAD',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      42: '0x43B53B7a97652030b19B2Ab1Ae6eeF098d5f5175',
      4: '0xDa38Ac5724502E27EcDcfB64e3cc60A48F7B2bAB', // SPG
    },
    quoteTokenSymbol: QuoteToken.WAD,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'WAD-BUSD',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      42: '0x6ea45b3f83f2c72211d42eaaa116670c4cdeaf62',
      4: '0x2f9873EbF0286Fa5edDF5d414b0490dc9c15cc8a', // SPG-BNB
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      42: '0xB760bDf88a3ABfa4fa5D1217b8AaEe7893A6ecEB',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      4: '0xDc4C8a4E3380aEc9daF604FA4937094D2cd919CC', // BNB
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'WAD-BNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      42: '0xd2479eb5b9fe7eaf24b1f84f4b2328decb665ab8',
      4: '0x64d94b153165bb8db2af14339c8390f53bfbb397', // SPG-BUSD
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      42: '0xB8c703826dC26B8dfb2d4F2AA4652A430c363212',
      4: '0x3720E88Fbc0F3519E284Dd82b6CF6933b5da4D84', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      42: '0x4f0e9f97448bfe63cd2afe7d89ad74d4f93e6779',
      4: '0x64d94b153165bb8db2af14339c8390f53bfbb397', // SPG-BUSD
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xB760bDf88a3ABfa4fa5D1217b8AaEe7893A6ecEB',
      42: '0xB760bDf88a3ABfa4fa5D1217b8AaEe7893A6ecEB',
      4: '0x3720E88Fbc0F3519E284Dd82b6CF6933b5da4D84', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
