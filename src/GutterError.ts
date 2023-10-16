export class GutterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GutterError';
  }
}
