require('./main.css');
require('./bootstrap/css/bootstrap.min.css');

const UL = document.getElementById('myUL');

const tasks = [];
// retrieving data from html to array

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


  let list = document.createElement('li');
  let t = document.createTextNode(tasks[0].Task);
  list.appendChild(t);
  UL.appendChild(list);

  list = document.createElement('li');
  t = document.createTextNode(tasks[0].time);
  list.appendChild(t);
  UL.appendChild(list);

  list = document.createElement('li');
  t = document.createTextNode(tasks[0].Descrit);
  list.appendChild(t);
  UL.appendChild(list);
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
