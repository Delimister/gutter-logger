import { GutterError } from "./GutterError";
declare class Gutter {
    private apiUrl;
    private enableConsoleLogging;
    private debugMode;
    private appKey;
    constructor(apiUrl: string, appKey: string, enableConsoleLogging?: boolean, debugMode?: boolean);
    private sendLogMessage;
    log(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
}
export { Gutter, GutterError };
