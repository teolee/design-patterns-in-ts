import Singleton from "./Singleton";

function demo(): void {
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  if (singleton1 === singleton2) {
    console.log("Two singleton are equivalent");
  } else {
    console.log("Two singleton are not equivalent");
  }
}

demo();