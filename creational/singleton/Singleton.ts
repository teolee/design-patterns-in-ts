/**
 * The Singleton class defines the getInstance method that lets clients access the unique singleton instance.
 */

export default class Singleton {

  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}