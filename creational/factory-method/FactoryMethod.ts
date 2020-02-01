/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */

interface Product {
  operation(): string;
}

export abstract class Creator {

  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export class TruckCreator extends Creator {
  public factoryMethod(): Product {
    return new Truck();
  }
}

class Truck implements Product {
  public operation(): string {
    return "Result of the Truck";
  }
}

export class ShipCreator extends Creator {
  public factoryMethod(): Product {
    return new Ship();
  }
}

class Ship implements Product {
  public operation(): string {
    return "Result of the Ship";
  }
}