export class OrderController {
  private machines: Machine[] = [];

  constructor() {}

  registerMachine(machine: Machine) {
    this.machines.push(machine);
  }

  unregisterMachine(machine: Machine) {
    this.machines = this.machines.filter(m => m !== machine);
  }

  setState(state: string) {
    if (state === 'unknown') {
      throw new Error('Invalid state provided');
    }

    this.machines.forEach(machine => {
      machine.updateState(state);
    });
  }
}

export class Machine {
  private pastStates: string[] = [];
  state: string | null;

  constructor() {
    this.state = null;
  }

  updateState(state: string) {
    if (this.state !== null) {
      this.pastStates.push(this.state);
    }
    this.state = state;
  }

  performAudit(): string[] {
    let i = 1;
    const audit = [];
    for (const state of this.pastStates) {
      audit.push(`Order #${i} - ${state}`);
      i++;
    }
    audit.push(`Order #${i} - ${this.state}`);

    return audit;
  }
}
