export type order = "DESC" | "ASC"

export interface BaseBody {
    chain: string
    address: string
}

export interface WalletReqBody extends BaseBody {
    order: order
    limit?: number
}

export interface TokenReqBody extends BaseBody {
    include?: "percent_change" | undefined
}

export interface BlockchainReqBody {
    chain?: string
    transactionHash?: string
    blockNumberOrHash?: string | number
}