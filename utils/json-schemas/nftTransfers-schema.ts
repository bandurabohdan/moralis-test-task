import { addr_type, date_type, hash_type, number_type, string_type, url_type } from "./types"

const nftTransfersSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: [],
        properties: {
            token_address: addr_type,
            token_id: string_type,
            from_address_entity: string_type,
            from_address_entity_logo: url_type,
            from_address: addr_type,
            from_address_label: string_type,
            to_address_entity: string_type,
            to_address_entity_logo: url_type,
            to_address: addr_type,
            to_address_label: string_type,
            value: number_type,
            amount: string_type,
            contract_type: string_type,
            block_number: number_type,
            block_timestamp: date_type,
            block_hash: hash_type,
            transaction_hash: hash_type,
            transaction_type: string_type,
            transaction_index: number_type,
            log_index: number_type,
            operator: string_type,
            possible_spam: string_type,
            verified_collection: string_type
        }
    }
}

export default nftTransfersSchema