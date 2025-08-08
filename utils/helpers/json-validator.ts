// @ts-nocheck
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, coerceTypes: true, removeAdditional: true });
addFormats(ajv)

const validateOrThrow = async (data: any, schema: any) => {
    try {
        const validate = ajv.compile(schema)
        const valid = validate(data)
        if (!valid) {
            const errors = validate.errors.map(e => ({
                path: e.instancePath || e.schemaPath,
                message: e.message
            }));
            const err = new Error("Validation failed");
            err.details = errors;
            err.status = 400;
            throw err;
        }
        return true;
    } catch (e) {
        console.error(e)
    }
}

export default validateOrThrow