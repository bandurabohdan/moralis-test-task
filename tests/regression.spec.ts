import { addresses } from "../utils/data/addresses"
import { blocks } from "../utils/data/blocks"
import { tokens } from "../utils/data/tokens"
import { expect, test } from "../utils/fixtures/apiFixtures"
import validateOrThrow from "../utils/helpers/json-validator"
import blockSchema, { txSchema } from "../utils/json-schemas/block-schema"
import erc20TransferSchema from "../utils/json-schemas/erc20Transfer-schema"
import { historySchema } from "../utils/json-schemas/history-schema"
import tokenPriceSchema from "../utils/json-schemas/tokenPrice-schema"
import tokenSwapsSchema from "../utils/json-schemas/tokenSwap-schema"

test.describe('Regression positive', () => {

    addresses.forEach((address: string) => {
        test(`Wallet test - ${address}`, async({ wallet }) => {

            const history = await wallet.getHistory({ address })
            expect(await validateOrThrow(history, historySchema)).toBeTruthy()
            
            const erc20Transfers = await wallet.getERC20Transfers({ address })
            expect(await validateOrThrow(erc20Transfers, erc20TransferSchema)).toBeTruthy()

        })
    });

    tokens.forEach(({ name, address } : { name: string, address: string }) => {
        test(`Token test - ${name}`, async({ token }) => {

            // Paid request
            const tokenInfo = await token.search({ query: name })
            tokenInfo.status >= 200 && tokenInfo.status <= 300 
                ? validateOrThrow(tokenInfo.data, {})
                : expect(tokenInfo.data).toBe('This endpoint is not available on your plan.')
                 
            const tokenPrice = await token.getPrice({ address })
            expect(await validateOrThrow(tokenPrice, tokenPriceSchema)).toBeTruthy()

            const tokenStats = await token.getStats({ address })
            expect(typeof +(tokenStats?.transfers.total as string)).toBe('number')
            
            const tokenSwaps = await token.getSwapsByAddress(address)
            expect(await validateOrThrow(tokenSwaps, tokenSwapsSchema)).toBeTruthy()

        })
    });
    
    blocks.forEach((blockNumber: number) => {
        test(`Blockchain - block ${blockNumber}`, async({ blockchain }) => {
    
            const block = await blockchain.getBlock({ blockNumberOrHash: blockNumber })            
            expect(await validateOrThrow(block, blockSchema)).toBeTruthy()

            const tx = await blockchain.getTx({ transactionHash: block?.transactions[0].hash })
            expect(await validateOrThrow(tx, txSchema)).toBeTruthy()
            
        })
    })
})


test.describe('Regression negative', () => {
    test(`Wallet test`, async({ wallet }) => {

        const history = await wallet.getHistory({ address: '' })
        expect(await validateOrThrow(history, historySchema)).toBeTruthy()
        
        const erc20Transfers = await wallet.getERC20Transfers({ address: '' })
        expect(await validateOrThrow(erc20Transfers, erc20TransferSchema)).toBeTruthy()

    })

    test(`Token test`, async({ token }) => {

        // Paid request
        const tokenInfo = await token.search({ query: '' })
        tokenInfo.status >= 200 && tokenInfo.status <= 300 
            ? validateOrThrow(tokenInfo.data, {})
            : expect(tokenInfo.data).toBe('This endpoint is not available on your plan.')
                
        const tokenPrice = await token.getPrice({ address: '' })
        expect(await validateOrThrow(tokenPrice, tokenPriceSchema)).toBeTruthy()

        const tokenStats = await token.getStats({ address: '' })
        expect(typeof +(tokenStats?.transfers.total as string)).toBe('number')
        
        const tokenSwaps = await token.getSwapsByAddress('')
        expect(await validateOrThrow(tokenSwaps, tokenSwapsSchema)).toBeTruthy()

    })

    test(`Blockchain`, async({ blockchain }) => {
    
        const block = await blockchain.getBlock({ blockNumberOrHash: '' })            
        expect(await validateOrThrow(block, blockSchema)).toBeTruthy()

        const tx = await blockchain.getTx({ transactionHash: block?.transactions[0].hash })
        expect(await validateOrThrow(tx, txSchema)).toBeTruthy()
        
    })
})