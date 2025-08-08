import { APIRequestContext, test as base, request } from '@playwright/test'
import Moralis from "moralis"
import Blockchain from '../../API/Modules/Blockchain'
import Token from '../../API/Modules/Token'
import Wallet from '../../API/Modules/Wallet'

type ApiFixtures = {
    apiContext: APIRequestContext
    blockchain: Blockchain,
    token: Token,
    wallet: Wallet
}

Moralis.start({ apiKey: process.env.API_KEY })

export const test = base.extend<ApiFixtures>({
    apiContext: async({}, use) => {
        const apiContext = await request.newContext({
            baseURL: 'https://deep-index.moralis.io/',
            extraHTTPHeaders: {
                accept: 'application/json',
                'X-API-Key': process.env.API_KEY as string
            }
        })

        await use(apiContext)
    },
    blockchain: async({ apiContext }, use) => {
        await use(new Blockchain(apiContext))
    },
    token: async({ apiContext }, use) => {
        await use(new Token(apiContext))
    },
    wallet: async({ apiContext }, use) => {
        await use(new Wallet(apiContext))
    }
})

export { expect } from '@playwright/test'

export function step(stepName?: string) {
    return function decorator(target: Function, context: ClassMethodDecoratorContext) {
        return function replacementMethod(this: any, ...args: any) {
            const name = `${stepName || (context.name as string)}`
            return test.step(name, async () => {
                return await target.call(this, ...args)
            })
        }
    }
}