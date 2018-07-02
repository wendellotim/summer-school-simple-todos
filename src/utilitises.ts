
type Status = "active" | "pending" | "complete";
export interface Task {
    status?: Status;
    task: string;
    time: string;
    description: string;
}
const tasks: Task[] = [];
const ourList = document.getElementById("myUL");
const error = document.querySelector(".getError");
export function getData(event: Event) {
    event.preventDefault();

    const task1 = document.getElementById("tas") as HTMLInputElement;
    const newDescription = document.getElementById("des") as HTMLInputElement;
    const newTime = document.getElementById("tt") as HTMLInputElement;
    if (task1 && newDescription && newTime) {
        const task = task1.value.trim();
        const time = newTime.value.trim();
        const description = newDescription.value.trim();
        if (task === "" || time === "" || description === "") {
            if (error) {
                error.innerHTML = "required input";
            }
        } else {
            if (error) {
                error.innerHTML = "";
            }
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

           /* const edits = document.createElement("button");
            textNode = document.createTextNode("edit");
            edits.appendChild(textNode);
            listItem.appendChild(edits);
            edits.addEventListener("click", () => {
                const parent = listItem.parentElement;
                if (parent) {
                    parent.;
                }
            });*/

            const deleteButton = document.createElement("button");
            textNode = document.createTextNode("delete");
            deleteButton.appendChild(textNode);
            listItem.appendChild(deleteButton);
            deleteButton.addEventListener("click", () => {
                const parent = listItem.parentElement;
                if (parent) {
                    parent.remove();
                }
            });
        }
    }
}
