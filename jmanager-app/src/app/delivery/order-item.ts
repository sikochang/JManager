export class OrderItem {
  name: string;
  specification: string;
  quantity: number;

  constructor(name: string, speci: string, quantity: number){
    this.name = name;
    this.specification = speci;
    this.quantity = quantity;
  }
}
