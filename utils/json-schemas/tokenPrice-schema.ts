import { addr_type, number_type, string_type, url_type } from "./types"

const tokenPriceSchema = {
  type: 'object',
  properties: {
    "tokenName": string_type,
    tokenSymbol: string_type,
    tokenLogo: url_type,
    tokenDecimals: number_type,
    nativePrice: {
      type: 'object',
      properties: {
        value: number_type,
        decimals: number_type,
        name: string_type,
        symbol: string_type,
        address: addr_type
      }
    },
    usdPrice: number_type,
    usdPriceFormatted: number_type,
    "24hrPercentChange": number_type,
    exchangeAddress: addr_type,
    exchangeName: string_type,
    tokenAddress: addr_type,
    toBlock: number_type,
    possibleSpam: string_type,
    verifiedContract: string_type,
    pairAddress: string_type,
    pairTotalLiquidityUsd: number_type
  }
}

export default tokenPriceSchema