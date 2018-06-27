
type Status = "active" | "pending" | "complete";
export interface Task {
    status?: Status;
    task: string;
    time: string;
    description: string;
}
let tasks: Task [];
let ourList: HTMLElement | null;
tasks = [];
ourList = document.getElementById("myUL");

export function getData(event: Event) {
    event.preventDefault();

    const task1 = (document.getElementById("tas") as HTMLInputElement | null);
    const newDescription = (document.getElementById("des") as HTMLInputElement | null);
    const newTime = (document.getElementById("tt") as HTMLInputElement | null);
    if (task1 && newDescription && newTime) {
        const task = task1.value;
        const time = newTime.value;
        const description = newDescription.value;
        if (task === "" || time === "" || description === "" || task === " " || time === " " || description === " ") {
            alert("fill all the fields");
        } else {

           task1.value = "";
           newDescription.value = "";
           newTime.value = "";
    // create object
           const object = {
                               task,
                               time,
                               description
    };
           tasks.push(object);

           const unorderedList = document.createElement("ul");
           let listItem = document.createElement("li");
           let textNode = document.createTextNode(tasks[tasks.length - 1].task);
           listItem.appendChild(textNode);
           unorderedList.appendChild(listItem);
           if (ourList) {
    ourList.appendChild(unorderedList);
    }
           listItem = document.createElement("li");
           textNode = document.createTextNode(tasks[tasks.length - 1].description);
           listItem.appendChild(textNode);
           unorderedList.appendChild(listItem);
           if (ourList) {
    ourList.appendChild(unorderedList);
    }

           listItem = document.createElement("li");
           textNode = document.createTextNode(tasks[tasks.length - 1].time);
           listItem.appendChild(textNode);
           unorderedList.appendChild(listItem);
           if (ourList) {
    ourList.appendChild(unorderedList);
    }
   }
   }
  }
