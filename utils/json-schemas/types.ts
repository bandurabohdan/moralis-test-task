export const addr_type = { type: 'string', pattern: "^0x[a-fA-F0-9]{40}$" }
export const hash_type = { type: 'string', pattern: "^0x[a-fA-F0-9]{64}$" }
export const url_type = { type: ["string", "null"], format: "uri" }
export const date_type = { type: 'string', format: "date-time" }
export const string_type = { type: 'string' }
export const number_type = { type: 'number' }