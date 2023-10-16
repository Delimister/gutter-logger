import useGutterPolyfill from 'gutter-logger';

// Replace this with your actual API URL
const apiUrl = 'https://your-logdrain-api-endpoint.com';

// Initialize the console polyfill using useGutterPolyfill
useGutterPolyfill(apiUrl, 'app-key');

// Now, both console.log, console.error, etc., will use the Gutter logger as their underlying mechanism
console.log('This is a log message via Gutter');
console.error('This is an error via Gutter');
