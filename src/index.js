"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./main.css");
require("./bootstrap/css/bootstrap.min.css");
class MyApp {
    constructor() {
        this.eventListener = (event) => {
            this.getData(event);
        };
        // our array of objects
        this.tasks = [];
        this.ourList = document.getElementById("myUL");
        const subBtton = document.getElementById("box");
        if (subBtton) {
            subBtton.addEventListener("click", this.eventListener);
        }
    }
    // retrieving data from html form to array
    getData(event) {
        event.preventDefault();
        const task1 = document.getElementById("tas");
        const newDescription = document.getElementById("des");
        const newTime = document.getElementById("tt");
        if (task1 && newDescription && newTime) {
            const task = task1.value;
            const time = newTime.value;
            const description = newDescription.value;
            if (task === "" || time === "" || description === "" || task === " " || time === " " || description === " ") {
                alert("fill all the fields");
            }
            else {
                task1.value = "";
                newDescription.value = "";
                newTime.value = "";
                // create object
                const object = {
                    task,
                    time,
                    description
                };
                this.tasks.push(object);
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
    }
}
// tslint:disable-next-line:no-unused-expression
new MyApp();
//# sourceMappingURL=index.js.map