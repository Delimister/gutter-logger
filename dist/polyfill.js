"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gutter_1 = require("./Gutter");
const useGutterPolyfill = (apiUrl, appKey, enableConsoleLogging = true, debugMode = false) => {
    const gutter = new Gutter_1.Gutter(apiUrl, appKey, enableConsoleLogging, debugMode);
    if (enableConsoleLogging) {
        global.console = gutter;
    }
    return gutter;
};
exports.default = useGutterPolyfill;
