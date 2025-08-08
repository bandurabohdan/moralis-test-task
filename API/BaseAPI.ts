import { APIRequestContext } from "@playwright/test"

export default class BaseAPI {
    api: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.api = apiContext
    }
}