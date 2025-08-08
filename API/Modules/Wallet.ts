import { APIRequestContext } from "@playwright/test";
import Moralis from "moralis";

import BaseAPI from "../BaseAPI";
import { walletReqBody } from "../../utils/helpers/reqBodyConfig";
import { WalletReqBody } from "../../utils/interfaces/IReqBody";
import { step } from "../../utils/fixtures/apiFixtures";

export default class Wallet extends BaseAPI {
    constructor(apiContext: APIRequestContext) {
        super(apiContext)
    }

    @step('Get wallet history')
    async getHistory(params?: Partial<WalletReqBody>) {
        try {
            const response = await Moralis.EvmApi.wallets.getWalletHistory(walletReqBody(params));
            return response.toJSON().result
        } catch (e) {
            console.error('getWalletHistory error: ', e);
        }
    }

    @step('Get wallet ERC20 transfers')
    async getERC20Transfers(params?: Partial<WalletReqBody>) {
        try {
            const response = await Moralis.EvmApi.token.getWalletTokenTransfers(walletReqBody(params));
            return response.toJSON().result
        } catch (e) {
            console.error('getWalletERC20Transfers error: ', e)
        }
    }
}