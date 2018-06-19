require('./main.css');
require("./bootstrap/css/bootstrap.min.css");
let app = document.querySelector('#app');
//an arry of objects
var tasks = [ { task: '', description: '', time: new Date().getHours().toString() + ":" + getMinutes() }, 
{ task: '', description: '', time: new Date().getHours().toString() + ":" + getMinutes() },
{ task: '', description: '', time: new Date().getHours().toString() + ":" + getMinutes() },
{ task: '', description: '', time: new Date().getHours().toString() + ":" + getMinutes() },
{ task: '', description: '', time: new Date().getHours().toString() + ":" + getMinutes() },
]
for(let i = 0; i<tasks.length; i++){
var li = document.createElement("li");

var t = document.createTextNode(tasks[i].task);


}




/*
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function myFunction(x) {
  x.classList.toggle("change");
}
*/
 /*
var button = document.createElement("button");
button.innerHTML = 'my button'
app.appendChild(button);
//app.appendChild(table);
*/
























//app.innerHTML = '<h2></h2>'
