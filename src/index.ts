import "./main.css";
import "./bootstrap/css/bootstrap.min.css";
import { Task, getData } from "./utilitises";

class MyApp {
    ourList: HTMLElement | null;

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

// retrieving data from html form to array

}

// tslint:disable-next-line:no-unused-expression
new MyApp();
