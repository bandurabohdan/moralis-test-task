import { addr_type, hash_type, number_type, string_type } from "./types"

const internalTxSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: [],
        properties: {
            transaction_hash: hash_type,
            block_number: number_type,
            block_hash: hash_type,
            type: string_type,
            from: addr_type,
            to: addr_type,
            value: number_type,
            gas: number_type,
            gas_used: number_type,
            input: string_type,
            output: string_type
        }
    }
}

export default internalTxSchema