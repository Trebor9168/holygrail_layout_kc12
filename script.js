// ASI: Automatic Semicolon Insertion

let pokemonBall = "Othman"
var student = "Medine"
const age = 21

//variablen um die HTML Komponenten zu fangen und manipulieren
let todolistInputField = document.getElementById("TodoInputField");
let todolistSubmitButton = document.getElementById("addButton");
let todolistBody = document.getElementById("todoList");


function addTodo() {
    //alert("Hurray, you just triggert your first Event with Click!");
    let todoInputValue = todolistInputField.value.trim();

    if (todoInputValue !== "") {
        let textNode = document.createTextNode(todoInputValue);

        //alert(todoInputValue);
        let newTodoBody = document.createElement("li");

        newTodoBody.classList.add("list-group-item");

        // adding a delete button
        let deleteButton = document.createElement("button");

        // add text to the button
        deleteButton.textContent = "Delete Todo";

        // add event to the button with click
        deleteButton.onclick = function () {
            // delete the parent of the button which is the LI in newTodoBody
            this.parentElement.remove();

            confetti({
                // Confetti Einstellungen werden hier geschrieben
            })
        }

        newTodoBody.appendChild(textNode);

        // add the button to the parent element which is the LI newTodoBody
        newTodoBody.appendChild(deleteButton)

        todolistBody.appendChild(newTodoBody);

        confetti({
            // confetti Einstellungen werden hier geschrieben
        })

        todolistInputField.value = "";
    }
}

todolistSubmitButton.addEventListener("click", ()=> {
    addTodo();
})

// funktion der entertaste zur eingabe
todolistInputField.addEventListener("keypress", (taste)=>{
    if (taste.key === "Enter") {
        addTodo();
    }

})

function HelloWorld() {
    alert("Hello World")
}

// HelloWorld(); //funktionen müssen zum arbeiten gerufen werden ansonsten starten sie gar nicht