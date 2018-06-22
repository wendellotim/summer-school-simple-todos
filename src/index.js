require('./main.css');
require('./bootstrap/css/bootstrap.min.css');

const ourList = document.getElementById('myUL');

const tasks = [];
// retrieving data from html form to array

function getData(event) {
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
  tasks.push(object);

  const unorderedList = document.createElement('ul');
  let listItem = document.createElement('li');
  let t = document.createTextNode(tasks[tasks.length - 1].Task);
  listItem.appendChild(t);
  unorderedList.appendChild(listItem);
  ourList.appendChild(unorderedList);


  listItem = document.createElement('li');
  t = document.createTextNode(tasks[tasks.length - 1].Descrit);
  listItem.appendChild(t);
  unorderedList.appendChild(listItem);
  ourList.appendChild(unorderedList);


  listItem = document.createElement('li');
  t = document.createTextNode(tasks[tasks.length - 1].time);
  listItem.appendChild(t);
  unorderedList.appendChild(listItem);
  ourList.appendChild(unorderedList);
}
const databutton = document.getElementById('box');
if (databutton) {
  databutton.addEventListener('click', getData);
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
