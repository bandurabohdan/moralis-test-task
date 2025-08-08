import erc20TransferSchema from "./erc20Transfer-schema"
import internalTxSchema from "./internalTx-schema"
import nativeTransfersSchema from "./nativeTransfers-schema"
import nftTransfersSchema from "./nftTransfers-schema"
import { addr_type, date_type, hash_type, number_type, string_type, url_type } from "./types"

export const historySchemaItems = {
    type: 'object',
    required: [],
    properties : {
        hash: hash_type,
        nonce: number_type,
        transaction_index: number_type,
        from_address_entity: string_type,
        from_address_entity_logo: url_type,
        from_address: addr_type,
        from_address_label: string_type,
        to_address_entity: string_type,
        to_address_entity_logo: url_type,
        to_address: addr_type,
        to_address_label: string_type,
        value: number_type,
        gas: number_type,
        gas_price: string_type,
        receipt_cumulative_gas_used: string_type,
        receipt_gas_used: string_type,
        receipt_contract_address: string_type,
        receipt_root: string_type,
        receipt_status: string_type,
        block_timestamp: date_type,
        block_number: number_type,
        block_hash: hash_type,
        internal_transactions: internalTxSchema,
        nft_transfers: nftTransfersSchema,
        erc20_transfer: erc20TransferSchema,
        native_transfers: nativeTransfersSchema
    }
}

export const historySchema = {
    type: 'array',
    items: historySchemaItems
}