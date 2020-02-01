import { Creator } from "./FactoryMethod";
import { TruckCreator, ShipCreator } from "./FactoryMethod";

function demo(creator: Creator): void {
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.someOperation());
}

console.log("App: Launched with the TruckCreator.");
demo(new TruckCreator());
console.log("");

console.log("App: Launched with the ShipCreator.");
demo(new ShipCreator());
console.log("");
