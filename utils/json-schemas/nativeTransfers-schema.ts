import { addr_type, number_type, string_type, url_type } from "./types"

const nativeTransfersSchema = {
    type: 'array',
    items: {
        type: 'object',
        required: [],
        properties: {
            from_address_entity: string_type,
            from_address_entity_logo: url_type,
            from_address: addr_type,
            from_address_label: string_type,
            to_address_entity: string_type,
            to_address_entity_logo: url_type,
            to_address: addr_type,
            to_address_label: string_type,
            value: number_type,
            value_formatted: number_type,
            direction: string_type,
            internal_transaction: string_type,
            token_symbol: string_type,
            token_logo: url_type
        }
    }
}

export default nativeTransfersSchema