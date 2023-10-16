import {Gutter} from './Gutter';

declare const global: {
  console: any;
};

const useGutterPolyfill = (apiUrl: string, appKey: string, enableConsoleLogging: boolean = true, debugMode: boolean = false) => {
  const gutter = new Gutter(apiUrl, appKey, enableConsoleLogging, debugMode);

  if (enableConsoleLogging) {
    global.console = gutter;
  }

  return gutter;
};

export default useGutterPolyfill;
