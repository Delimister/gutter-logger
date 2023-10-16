"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GutterError = exports.Gutter = void 0;
const axios_1 = __importDefault(require("axios"));
const GutterError_1 = require("./GutterError");
Object.defineProperty(exports, "GutterError", { enumerable: true, get: function () { return GutterError_1.GutterError; } });
class Gutter {
    constructor(apiUrl, appKey, enableConsoleLogging = true, debugMode = false) {
        this.debugMode = false;
        this.apiUrl = apiUrl;
        this.appKey = appKey;
        this.enableConsoleLogging = enableConsoleLogging;
        this.debugMode = debugMode;
    }
    sendLogMessage(level, ...args) {
        const logData = {
            appKey: this.appKey,
            data: args,
            level,
            timestamp: new Date().toISOString(),
        };
        axios_1.default.post(this.apiUrl, logData).then(() => {
            if (this.enableConsoleLogging && this.debugMode) {
                console.log(...args); // Log to the console in debug mode
            }
        }).catch((error) => {
            if (this.debugMode) {
                console.error(...args); // Log to the console in debug mode
                console.error('Error sending log entry:', error);
            }
        });
    }
    log(...args) {
        return this.sendLogMessage('info', ...args);
    }
    error(...args) {
        return this.sendLogMessage('error', ...args);
    }
    warn(...args) {
        return this.sendLogMessage('warn', ...args);
    }
    info(...args) {
        return this.sendLogMessage('info', ...args);
    }
}
exports.Gutter = Gutter;
