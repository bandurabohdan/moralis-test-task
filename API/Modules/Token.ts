import { APIRequestContext } from "@playwright/test"
import Moralis from "moralis"

import BaseAPI from "../BaseAPI"
import { baseBody, tokenReqBody } from "../../utils/helpers/reqBodyConfig"
import { BaseBody, TokenReqBody } from "../../utils/interfaces/IReqBody"
import { step } from "../../utils/fixtures/apiFixtures"

export default class Token extends BaseAPI {
    constructor(apiContext: APIRequestContext) {
        super(apiContext)
    }

    @step('Search token info by query')
    async search({query, chain = 'eth', limit = 10 }: {query: string, chain?: string, limit?: number }): Promise<{ status: number, data: any }> {
        try {
            const response = await this.api.get(`api/v2.2/tokens/search?query=${query}&chains=${chain}&limit=${limit}&isVerifiedContract=true&sortBy=volume1hDesc&boostVerifiedContracts=true`)
            const data = await response.json()
            return {
                status: response.status(),
                data: data?.message || data
            }
        } catch (e) {
            console.error('tokenSearch error: ', e)
        }

        return { status: 400, data: 'Bad request' }
    }

    @step('Get token price')
    async getPrice(params?: Partial<TokenReqBody>) {
        try {
            const response = await Moralis.EvmApi.token.getTokenPrice(tokenReqBody(params));
            return response.toJSON()
        } catch (e) {
            console.error('tokenGetPrice error: ', e)
        }
    }

    @step('Get token stats')
    async getStats(params?: Partial<BaseBody>) {
        try {
            const response = await Moralis.EvmApi.token.getTokenStats(baseBody(params));
            return response.toJSON()
        } catch (e) {
            console.error('tokenGetStats error: ', e)
        }
    }

    @step('Get token swaps')
    async getSwapsByAddress(address: string, chain: string = 'eth', limit: number = 5, order: string = 'DESC') {
        try {
            const response = await this.api.get(`api/v2.2/erc20/${address}/swaps?chain=${chain}&limit=${limit}&order=${order}`)
            const data = await response.json()
            return data.result
        } catch (e) {
            console.error('tokenGetSwapsByAddress error: ', e)
        }
    }
}