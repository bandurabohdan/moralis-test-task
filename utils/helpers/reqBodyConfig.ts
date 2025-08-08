import { BaseBody, order, TokenReqBody, WalletReqBody } from "../interfaces/IReqBody"
import { ethers } from 'ethers'

export const baseBody = (params?: Partial<BaseBody>): BaseBody => ({
    "chain": params?.chain as string || "0x1",
    "address": ethers.getAddress(params?.address as string)
})

export const walletReqBody = (params?: Partial<WalletReqBody>): WalletReqBody => ({
    ...baseBody(params),
    "order": params?.order as order || "DESC",
    "limit": params?.limit as number || 1
})

export const tokenReqBody = (params?: Partial<TokenReqBody>): TokenReqBody => ({
    ...baseBody(params),
    include: params?.include ? "percent_change" : undefined
})