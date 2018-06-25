"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./main.css");
require("./bootstrap/css/bootstrap.min.css");
class MyApp {
    constructor() {
        //our array of objects
        this.tasks = [];
        this.ourList = document.getElementById('myUL');
        const subBtton = document.getElementById('box');
        if (subBtton) {
            subBtton.addEventListener('click', (event) => { this.getData(event); });
        }
    }
    // retrieving data from html form to array
    getData(event) {
        event.preventDefault();
        const TaskName = document.getElementById('tas').value;
        const Time = document.getElementById('tt').value;
        const Description = document.getElementById('des').value;
        // create object
        const object = {
            Task: TaskName,
            time: Time,
            Descrit: Description,
        };
        this.tasks.push(object);
        const unorderedList = document.createElement('ul');
        let listItem = document.createElement('li');
        let t = document.createTextNode(this.tasks[this.tasks.length - 1].Task);
        listItem.appendChild(t);
        unorderedList.appendChild(listItem);
        this.ourList.appendChild(unorderedList);
        listItem = document.createElement('li');
        t = document.createTextNode(this.tasks[this.tasks.length - 1].Descrit);
        listItem.appendChild(t);
        unorderedList.appendChild(listItem);
        this.ourList.appendChild(unorderedList);
        listItem = document.createElement('li');
        t = document.createTextNode(this.tasks[this.tasks.length - 1].time);
        listItem.appendChild(t);
        unorderedList.appendChild(listItem);
        this.ourList.appendChild(unorderedList);
    }
}
const app = new MyApp();
//# sourceMappingURL=index.js.map