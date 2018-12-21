"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var STRICT_TYPES = ['String', 'Array', 'Object', 'Number', 'Symbol', 'Boolean'];
function isObject(value, isStrict) {
    if (value && isStrict && STRICT_TYPES.indexOf(value.constructor.name) === -1) {
        return false;
    }
    return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}
exports.isObject = isObject;
//# sourceMappingURL=types.js.map