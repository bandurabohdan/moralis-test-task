import { addr_type, date_type, hash_type, number_type, string_type, url_type } from "./types"

export const txSchema = {
    type: 'object',
    properties: {
        hash: hash_type,
        nonce: number_type,
        transaction_index: number_type,
        from_address_entity: { anyOf: [ string_type, { type: 'null'} ] },
        from_address_entity_logo: url_type,
        from_address: addr_type,
        from_address_label: { anyOf: [ string_type, { type: 'null'} ] },
        to_address_entity: string_type,
        to_address_entity_logo: url_type,
        to_address: { anyOf: [ addr_type, { type: 'null' } ]},
        to_address_label: string_type,
        value: number_type,
        gas: number_type,
        gas_price: number_type,
        input: string_type,
        receipt_cumulative_gas_used: number_type,
        receipt_gas_used: number_type,
        receipt_contract_address: { anyOf: [ addr_type, { type: 'null'} ] },
        receipt_root: { anyOf: [ string_type, { type: 'null'} ] },
        receipt_status: number_type,
        block_timestamp: date_type,
        block_number: number_type,
        block_hash: hash_type,
        internal_transactions: {
            type: 'array',
            items: {
                type: 'object',
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
        },
        logs: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    log_index: number_type,
                    transaction_hash: hash_type,
                    transaction_index: number_type,
                    address: addr_type,
                    data: string_type,
                    topic0: { anyOf: [ string_type, string_type, { type: 'null'} ] },
                    topic1: { anyOf: [ string_type, string_type, { type: 'null'} ] },
                    topic2: { anyOf: [ string_type, string_type, { type: 'null'} ] },
                    topic3: { anyOf: [ string_type, string_type, { type: 'null'} ] },
                    block_timestamp: date_type,
                    block_number: number_type,
                    block_hash: hash_type
                }
            }
        },
        transaction_fee: number_type
    }
}

const blockSchema = {
    type: 'object',
    properties: {
        timestamp: date_type,
        number: number_type,
        hash: hash_type,
        parent_hash: hash_type,
        nonce: string_type,
        sha3_uncles: hash_type,
        logs_bloom: string_type,
        transactions_root: hash_type,
        state_root: hash_type,
        receipts_root: hash_type,
        miner: addr_type,
        difficulty: number_type,
        total_difficulty: number_type,
        size: number_type,
        extra_data: string_type,
        gas_limit: number_type,
        gas_used: number_type,
        transaction_count: number_type,
        base_fee_per_gas: number_type,
        transactions: {
            type: 'array',
            items: txSchema
        }
    }
}

export default blockSchema