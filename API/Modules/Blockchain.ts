import { APIRequestContext } from "@playwright/test"
import Moralis from "moralis"

import BaseAPI from "../BaseAPI"
import { baseBody } from "../../utils/helpers/reqBodyConfig";
import { BlockchainReqBody } from "../../utils/interfaces/IReqBody";
import { step } from "../../utils/fixtures/apiFixtures";

export default class Blockchain extends BaseAPI{
    constructor( apiContext: APIRequestContext) {
        super(apiContext)
    }

    @step('Get block')
    async getBlock(params: BlockchainReqBody) {
        try {
            const response = await Moralis.EvmApi.block.getBlock({
                chain: params.chain as string || '0x1',
                blockNumberOrHash: params.blockNumberOrHash as string
            });

            return response?.toJSON()
        } catch (e) {
            console.error('getBlock error: ', e)
        }
    }

    @step('Get Transaction')
    async getTx(params: BlockchainReqBody) {
        try {
            const response = await Moralis.EvmApi.transaction.getTransaction({
                chain: params.chain as string || '0x1',
                transactionHash: params.transactionHash as string
            });

            return response?.toJSON()
        } catch (e) {
            console.error('getTx error: ', e)
        }
    }
}