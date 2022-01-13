// Call Elements 
let myForm = document.querySelector("form");
let inputText = document.querySelector("form #text");
let submit = document.querySelector("form #submit");
let result = document.querySelector("div");

// Array For Stored Tasks
let taskArray = [];

// If There Is Stored Elements
if (window.localStorage.getItem(`${"cont"}`)) {

    // Add stored Tasks In The Array
    taskArray.push(window.localStorage.getItem("cont"));

    // Create divContainer For Evert Stored Task
    window.localStorage.getItem("cont").split(",").forEach(function(e){
        // Create Container Div 
        let divContainer = document.createElement("div");
        divContainer.className = "container";
        result.appendChild(divContainer);
        // Create Task Div
        let tasx = document.createElement("p");
        tasx.textContent = `${e}`;
        divContainer.appendChild(tasx);
        // Create Delete Input
        let del = document.createElement("input");
        del.type = "button";
        del.value = "Delete";
        divContainer.appendChild(del)
    })
}

// Add New Tasks
myForm.onsubmit = function() {
    if (inputText.value !== "") {
        // Create Container Div 
        let divContainer = document.createElement("div");
        divContainer.className = "container";
        result.appendChild(divContainer);
        // Create Task Div
        let tasx = document.createElement("p");
        tasx.textContent = `${inputText.value}`;
        divContainer.appendChild(tasx);
        // Create Delete Input
        let del = document.createElement("input");
        del.type = "button";
        del.value = "Delete";
        divContainer.appendChild(del)
        // Add In The Array
        taskArray.push(result.children[result.children.length - 1].textContent);
        // Stor The Array In Local Storage
        window.localStorage.setItem("cont", `${taskArray}`)
        // Not Send The Form
        return false;
    }
    else {
        return false;
    }   
}
// Delete Tasks
document.addEventListener("click", function(elme){
    if (elme.target.value === "Delete") {
        // Convert Object To String Then To An Array
        let tasksArray = JSON.stringify(taskArray).slice(2, -2).split(",");
        // Filter The Array To Delete The Task
        let tasksArray2 = tasksArray.filter(function(e) {
            return elme.target.parentElement.textContent !== e
        })
        // Add Filtered Array To My Array
        taskArray = tasksArray2
        window.localStorage.setItem("cont", `${taskArray}`)
        elme.target.parentElement.remove()
    }
})