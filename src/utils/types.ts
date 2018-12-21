const STRICT_TYPES = ['String', 'Array', 'Object', 'Number', 'Symbol', 'Boolean'];

export function isObject(value: any, isStrict?: boolean) {
    if (value && isStrict && STRICT_TYPES.indexOf(value.constructor.name) === -1) {
        return false;
    }
    return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}
