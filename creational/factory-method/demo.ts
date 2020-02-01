import { Creator } from "./FactoryMethod";
import { ConcreteCreator1, ConcreteCreator2 } from "./FactoryMethod";

function demo(creator: Creator): void {
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.someOperation());
}

console.log("App: Launched with the Creator1.");
demo(new ConcreteCreator1());
console.log("");

console.log("App: Launched with the Creator2.");
demo(new ConcreteCreator2());
console.log("");
