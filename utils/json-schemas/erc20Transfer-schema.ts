import { addr_type, date_type, hash_type, number_type, string_type, url_type } from "./types"

const erc20TransferSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: [],
        properties: {
            token_name: string_type,
            token_symbol: string_type,
            token_logo: url_type,
            token_decimals: string_type,
            transaction_hash: hash_type,
            address: addr_type,
            block_timestamp: date_type,
            block_number: number_type,
            block_hash: hash_type,
            to_address_entity: string_type,
            to_address_entity_logo: url_type,
            to_address: addr_type,
            to_address_label: string_type,
            from_address_entity: string_type,
            from_address_entity_logo: url_type,
            from_address: addr_type,
            from_address_label: string_type,
            value: number_type,
            transaction_index: number_type,
            log_index: number_type,
            possible_spam: string_type,
            verified_contract: string_type
        }
    }
}

export default erc20TransferSchema