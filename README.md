# Gutter

Gutter is a versatile logging module for TypeScript projects that allows you to log data to a remote log drain API while seamlessly integrating with the console. It provides a flexible way to centralize and manage logging in your applications.

## Installation

You can install Gutter using either npm or Yarn:

### Using npm

```bash
npm install gutter-logger
```

### Using Yarn

```bash
yarn add gutter-logger
```

## Usage

### Using Gutter with Polyfill

**1. Import Gutter and Polyfill**: Import the `Gutter` class and `useGutterPolyfill` function in your TypeScript project.

```typescript
import Gutter, { useGutterPolyfill } from 'gutter-logger';
```

**2. Replace Console with Gutter (Optional)**: You can choose to replace the default `console` with Gutter for seamless integration.

```typescript
useGutterPolyfill(apiUrl, appKey, enableConsoleLogging, debugMode);
```

By calling `useGutterPolyfill`, you replace the default `console` with a custom console that uses the Gutter logger as its underlying mechanism.

**3. Logging**: You can now use the modified `console` to log data to the remote API and/or the console.

```typescript
console.log('This is a log message');
console.error('This is an error message');
console.warn('This is a warning message');
// Use other console methods as well, e.g., console.info, console.debug, etc.
```

### Using Gutter with an Instance

**1. Import Gutter**: Import the `Gutter` class in your TypeScript project.

```typescript
import Gutter from 'gutter-logger';
```

**2. Create a Gutter Instance**: Create an instance of the `Gutter` class, providing the API URL and optional configuration options.

```typescript
const apiUrl = 'https://your-logdrain-api-endpoint.com';
const gutter = new Gutter(apiUrl, appKey, enableConsoleLogging, debugMode);
```

- `apiUrl`: The URL of your log drain API.
- `appKey` (optional): An application key to identify the source of logs (useful for multiple projects).
- `enableConsoleLogging` (optional): Enable or disable console logging (default: `true`).
- `debugMode` (optional): Enable debug mode to log errors and debug information (default: `false`).

**3. Logging**: You can now use the Gutter instance to log data to the remote API and/or the console.

```typescript
gutter.log('This is a log message');
gutter.error('This is an error message');
gutter.warn('This is a warning message');
// Use other console methods as well, e.g., gutter.info, gutter.debug, etc.
```

## Examples

Check the examples directory for usage examples and integration with popular frameworks and libraries.

## Configuration

You can configure the Gutter instance when creating it, allowing you to customize its behavior according to your project's needs.

- `apiUrl`: The URL of your log drain API.
- `appKey` (optional): An application key to identify the source of logs (useful for multiple projects).
- `enableConsoleLogging` (optional): Enable or disable console logging (default: `true`).
- `debugMode` (optional): Enable debug mode to log errors and debug information (default: `false`).

## Author

- [Edward Nguyen](https://delimister.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
