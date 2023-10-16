import {Gutter, GutterError} from "../dist/Gutter";

const logger = new Gutter('https://your-logdrain-api-endpoint.com', 'app-key-here', true, true);

try {
  logger.log('This is a log message');
} catch (error) {
  if (error instanceof GutterError) {
    console.error('Gutter error occurred:', error.message);
  } else {
    console.error('Unexpected error occurred:', error);
  }
}
