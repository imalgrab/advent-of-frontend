export class ChristmasEmitter {
  private eventsBuffer = [];
  private handledEvents = new Map<string, Function[]>();

  constructor() {}

  on(name: string, handler: Function) {
    const handlers = this.handledEvents.get(name) ?? [];
    this.handledEvents.set(name, [...handlers, handler]);
  }

  off(name: string, handler: Function) {
    const handlers = this.handledEvents.get(name) ?? [];

    if (handlers.length > 0) {
      this.handledEvents.set(
        name,
        handlers.filter(h => JSON.stringify(h) !== JSON.stringify(handler))
      );
    }
  }

  emit(name: string) {
    if (this.handledEvents.has(name)) {
      const handlers = this.handledEvents.get(name) ?? [];
      for (const handler of handlers) {
        handler();
      }
    }
  }
}
