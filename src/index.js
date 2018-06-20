require('./main.css');
require("./bootstrap/css/bootstrap.min.css");
//let app = document.querySelector('#app');

var time = function() {
  return new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
};

//an arry of objects
var tasks = [
  {
    task: 'to cook',
    description: 'kikoko',
    time: time()
  }, 
  {
     task: 'to do',
     description: 'work',
     time: time()
  },
  { 
     task: 'to dig',
     description: 'compound',
     time: time()
  },
  {
     task: 'to winow',
     description: 'beans',
     time: time()
  },
  {
     task: 'to bath',
     description: 'my body',
     time: time()
  },

  {
    task: 'to prepare for',
    description: 'work',
    time: time()
 }
  
           ]


for( let i = 0; i<tasks.length; i++)
  {  var list = document.createElement("li");
var t = document.createTextNode(tasks[i].task  + " " + tasks[i].description + tasks[i].time);
list.appendChild(t);
document.getElementById("myUL").appendChild(list);
}

var myBtn = document.getElementById("addBtn");
if (myBtn) {
  myBtn.addEventListener("click", function() {
    console.log('Clicked!');

  });
}

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

function addItem(){
	var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
  
}

document.getElementById("addtask").addEventListener("click", function()
{
  window.location.href="addtask.html";
}
)

// Create a new list item when clicking on the "Add" button
function newElement() {
  	var ul = document.getElementById("myUL");
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
/*
*/
 /*
var button = document.createElement("button");
button.innerHTML = 'my button'
app.appendChild(button);
//app.appendChild(table);
*/

<<<<<<< HEAD
=======


function addItem(){
  var k = document.createElement("k");
  k.setAttribute("type", "time" );
  k.setAttribute("value", "23:00:00");
  document.body.appendChild(k);
}




















>>>>>>> 4df32e0dcea55e6a5b5f26343505a2b213c26282
//app.innerHTML = '<h2></h2>'
