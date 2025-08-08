import { addr_type, date_type, hash_type, number_type, string_type, url_type } from "./types";

const tokenSwapSchema = {
    type: 'object',
    properties: {
      transactionHash: hash_type,
      transactionIndex: number_type,
      transactionType: string_type,
      baseQuotePrice: string_type,
      entity: { type: ['string', 'null'] },
      entityLogo: url_type,
      blockTimestamp: date_type,
      blockNumber: number_type,
      subCategory: string_type,
      walletAddress: addr_type,
      walletAddressLabel: { type: ['string', 'null'] },
      pairAddress: string_type,
      pairLabel: string_type,
      exchangeName: string_type,
      exchangeAddress: addr_type,
      exchangeLogo: url_type,
      baseToken: addr_type,
      quoteToken: addr_type,
      bought: {
        type: 'object',
        properties: {
            address: addr_type,
            amount: number_type,
            usdPrice: number_type,
            usdAmount: number_type,
            symbol: string_type,
            logo: url_type,
            name: string_type,
            tokenType: string_type
        }
      },
      sold: {
        type: 'object',
        properties: {
            address: addr_type,
            amount: number_type,
            usdPrice: number_type,
            usdAmount: number_type,
            symbol: string_type,
            logo: url_type,
            name: string_type,
            tokenType: string_type
        }
      },
      totalValueUsd: number_type
    }
}

const tokenSwapsSchema = {
    type: 'array',
    items: tokenSwapSchema
}

export default tokenSwapsSchema