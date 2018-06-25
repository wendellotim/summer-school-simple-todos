import './main.css';
import './bootstrap/css/bootstrap.min.css';

class MyApp{
    ourList: HTMLInputElement;

    tasks: { task: string, time: string, description: string }[];
    constructor() {
    //our array of objects
    this.tasks = [];

    this.ourList = (<HTMLInputElement>document.getElementById('myUL'));

    const subBtton = document.getElementById('box');
    if (subBtton) {
      subBtton.addEventListener('click', (event) =>{this.getData(event); });
    }
  }

// retrieving data from html form to array

 getData(event: Event) {
  event.preventDefault();

  const task = (<HTMLInputElement>document.getElementById('tas')).value;
  const time = (<HTMLInputElement>document.getElementById('tt')).value;
  const description = (<HTMLInputElement>document.getElementById('des')).value;
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
