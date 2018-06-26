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
        const task = document.getElementById('tas').value;
        const time = document.getElementById('tt').value;
        const description = document.getElementById('des').value;
        // create object
        const object = {
            task,
            time,
            description,
        };
        this.tasks.push(object);
        const unorderedList = document.createElement('ul');
        let listItem = document.createElement('li');
        let textNode = document.createTextNode(this.tasks[this.tasks.length - 1].task);
        listItem.appendChild(textNode);
        unorderedList.appendChild(listItem);
        this.ourList.appendChild(unorderedList);
        listItem = document.createElement('li');
        textNode = document.createTextNode(this.tasks[this.tasks.length - 1].description);
        listItem.appendChild(textNode);
        unorderedList.appendChild(listItem);
        this.ourList.appendChild(unorderedList);
        listItem = document.createElement('li');
        textNode = document.createTextNode(this.tasks[this.tasks.length - 1].time);
        listItem.appendChild(textNode);
        unorderedList.appendChild(listItem);
        this.ourList.appendChild(unorderedList);
    }
}
new MyApp();
//# sourceMappingURL=index.js.map