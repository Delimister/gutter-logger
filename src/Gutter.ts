import axios from 'axios';
import {GutterError} from "./GutterError";

class Gutter {
  private apiUrl: string;
  private enableConsoleLogging: boolean;
  private debugMode: boolean = false;
  private appKey: string;

  constructor(apiUrl: string, appKey: string, enableConsoleLogging: boolean = true, debugMode: boolean = false) {
    this.apiUrl = apiUrl;
    this.appKey = appKey;
    this.enableConsoleLogging = enableConsoleLogging;
    this.debugMode = debugMode;
  }

  private sendLogMessage(level: string, ...args: any[]) {
    const logData = {
      appKey: this.appKey, // Include the app key in the log data
      data: args,
      level,
      timestamp: new Date().toISOString(),
    };

    axios.post(this.apiUrl, logData).then(() => {
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

  log(...args: any[]) {
    return this.sendLogMessage('info', ...args);
  }

  error(...args: any[]) {
    return this.sendLogMessage('error', ...args);
  }

  warn(...args: any[]) {
    return this.sendLogMessage('warn', ...args);
  }

  info(...args: any[]) {
    return this.sendLogMessage('info', ...args);
  }
}

export {Gutter, GutterError};
