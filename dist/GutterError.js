"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GutterError = void 0;
class GutterError extends Error {
    constructor(message) {
        super(message);
        this.name = 'GutterError';
    }
}
exports.GutterError = GutterError;
