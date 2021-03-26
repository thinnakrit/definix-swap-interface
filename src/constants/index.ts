import { ChainId, JSBI, Percent, Token, WETH } from 'definixswap-sdk'

export const SIX_TOKEN = '0x1FD5a30570b384f03230595E31a4214C9bEdC964'
export const ROUTER_ADDRESS = '0x4392e765E36dAA3782e95f91565f081066D13e78'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const multicallAdress = {
  [ChainId.MAINNET]: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb',
  [ChainId.BSCTESTNET]: '0x67ADCB4dF3931b0C5Da724058ADC2174a9844412',
}

export const SIX_ADDRESS = {
  [ChainId.MAINNET]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // ==================
  [ChainId.BSCTESTNET]: '0x1FD5a30570b384f03230595E31a4214C9bEdC964',
}

export const FINIX_ADDRESS = {
  [ChainId.MAINNET]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // ==================
  [ChainId.BSCTESTNET]: '0x136aF56aA2E2bF6114DA5F659B24456c60dDCB8e',
}

export const BUSD_ADDRESS = {
  [ChainId.MAINNET]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // ==================
  [ChainId.BSCTESTNET]: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
}

export const WBNB_ADDRESS = {
  [ChainId.MAINNET]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // ==================
  [ChainId.BSCTESTNET]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
}

export const SIX_BUSD_LP = {
  [ChainId.MAINNET]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // ==================
  [ChainId.BSCTESTNET]: '0xa8f6F143427546E414B41D7Bd57365df914f002c',
}

export const FINIX_BUSD_LP = {
  [ChainId.MAINNET]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // ==================
  [ChainId.BSCTESTNET]: '0x2bCbe27465A98B6F2E6A4b097Db6dce0A87F92A6',
}

export const MASTERCHEF_ADDRESS = {
  [ChainId.MAINNET]: '0x2Ac7c92c59dd3CAd6CF009BcAFBc8C6D48F9bA99', // ==================
  [ChainId.BSCTESTNET]: '0x2Ac7c92c59dd3CAd6CF009BcAFBc8C6D48F9bA99',
}

export const DAI = new Token(ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  18,
  'UST',
  'Wrapped UST Token'
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, UST],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  // [ChainId.MAINNET]: [
  //   [
  //     new Token(ChainId.MAINNET, SIX_ADDRESS[ChainId.MAINNET], 18, 'SIX', 'SIX Token'),
  //     new Token(ChainId.MAINNET, SIX_ADDRESS[ChainId.MAINNET], 18, 'FINIX', 'FINIX Token'),
  //   ],
  //   [
  //     new Token(ChainId.MAINNET, SIX_ADDRESS[ChainId.MAINNET], 18, 'SIX', 'SIX Token'),
  //     new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD Token'),
  //   ],
  //   [
  //     new Token(ChainId.MAINNET, FINIX_ADDRESS[ChainId.MAINNET], 18, 'FINIX', 'FINIX Token'),
  //     new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD Token'),
  //   ],
  //   [
  //     new Token(ChainId.MAINNET, SIX_ADDRESS[ChainId.MAINNET], 18, 'SIX', 'SIX Token'),
  //     new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
  //   ],
  //   [
  //     new Token(ChainId.MAINNET, FINIX_ADDRESS[ChainId.MAINNET], 18, 'FINIX', 'FINIX Token'),
  //     new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
  //   ],
  //   [
  //     new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
  //     new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD Token'),
  //   ],
  // ],
  [ChainId.BSCTESTNET]: [
    [
      new Token(ChainId.BSCTESTNET, SIX_ADDRESS[ChainId.BSCTESTNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BSCTESTNET, FINIX_ADDRESS[ChainId.BSCTESTNET], 18, 'FINIX', 'FINIX Token'),
    ],
    [
      new Token(ChainId.BSCTESTNET, SIX_ADDRESS[ChainId.BSCTESTNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD Token'),
    ],
    [
      new Token(ChainId.BSCTESTNET, FINIX_ADDRESS[ChainId.BSCTESTNET], 18, 'FINIX', 'FINIX Token'),
      new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD Token'),
    ],
    [
      new Token(ChainId.BSCTESTNET, SIX_ADDRESS[ChainId.BSCTESTNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB'),
    ],
    [
      new Token(ChainId.BSCTESTNET, FINIX_ADDRESS[ChainId.BSCTESTNET], 18, 'FINIX', 'FINIX Token'),
      new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB'),
    ],
    [
      new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB'),
      new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD Token'),
    ],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
