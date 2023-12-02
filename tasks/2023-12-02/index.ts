type Queue<T> = [T, number][];

export class ChristmasQueue<T> {
  private queue: Queue<T> = [];

  constructor() {
    this.queue = [];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  enqueue(element: T, priority: number): void {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i][1] < priority) {
        this.queue.splice(i, 0, [element, priority]);
        return;
      }
    }
    this.queue.push([element, priority]);
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('There are no letters in the queue!');
    }

    const [element] = this.queue.shift()!;
    return element;
  }
}
