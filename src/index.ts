import "./main.css";
import "./bootstrap/css/bootstrap.min.css";
interface Task {
    status?: Status;
    task: string;
    time: string;
    description: string;
}
type Status = "active" | "pending" | "complete";

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
    this.getData(event);
}

// retrieving data from html form to array

    getData(event: Event) {
  event.preventDefault();

  const task1 = (document.getElementById("tas") as HTMLInputElement | null);
  const newDescription = (document.getElementById("des") as HTMLInputElement | null);
  const newTime = (document.getElementById("tt") as HTMLInputElement | null);
  if (task1 && newDescription && newTime) {
      const task = task1.value;
      const time = newTime.value;
      const description = newDescription.value;
  // create object
      const object = {
    task,
    time,
    description
  };
      this.tasks.push(object);
  }

  const unorderedList = document.createElement("ul");
  let listItem = document.createElement("li");
  let textNode = document.createTextNode(this.tasks[this.tasks.length - 1].task);
  listItem.appendChild(textNode);
  unorderedList.appendChild(listItem);
  if (this.ourList) {
  this.ourList.appendChild(unorderedList);
  }
  listItem = document.createElement("li");
  textNode = document.createTextNode(this.tasks[this.tasks.length - 1].description);
  listItem.appendChild(textNode);
  unorderedList.appendChild(listItem);
  if (this.ourList) {
  this.ourList.appendChild(unorderedList);
  }

  listItem = document.createElement("li");
  textNode = document.createTextNode(this.tasks[this.tasks.length - 1].time);
  listItem.appendChild(textNode);
  unorderedList.appendChild(listItem);
  if (this.ourList) {
  this.ourList.appendChild(unorderedList);
  }
 }
}

// tslint:disable-next-line:no-unused-expression
new MyApp();
