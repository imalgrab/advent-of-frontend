export class GiftRegistry {
  private registry: Map<number, string[]>;

  constructor() {
    this.registry = new Map();
  }

  getGiftsForChild(id: number): string[] {
    return this.registry.get(id) ?? [];
  }

  addGift(childId: number, giftToAdd: string) {
    const gifts = this.registry.get(childId) ?? [];
    const updatedGifts = [...gifts, giftToAdd];
    this.registry.set(childId, updatedGifts);
  }

  removeGift(childId: number, giftToRemove: string) {
    const gifts = this.getGiftsForChild(childId);

    if (!gifts?.includes(giftToRemove)) {
      throw new Error('Gift not found');
    }

    const updatedGifts = gifts.filter(gift => gift !== giftToRemove);
    this.registry.set(childId, updatedGifts);
  }
}
