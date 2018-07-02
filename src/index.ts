import "./main.css";
import "./bootstrap/css/bootstrap.min.css";
import { Task, getData } from "./utilitises";

class MyApp {
    ourList: HTMLElement | null;
    E = document.querySelector("getError");
    tasks: Task [];
    constructor() {
    // our array of objects
    this.tasks = [];
    this.ourList = document.getElementById("myUL");

    const subBtton = document.getElementById("box");
    if (subBtton) {
      subBtton.addEventListener("click", this.eventListener);
    }

  }
    eventListener = (event: Event) => {
    getData(event);
}

}

// tslint:disable-next-line:no-unused-expression
new MyApp();
