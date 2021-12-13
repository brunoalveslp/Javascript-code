const todoText = document.querySelector("#todotext");
const addBtn = document.querySelector("#addtodo");
const list = document.querySelector("#todos");

addBtn.addEventListener("click", createTodo);

todoText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") createTodo();
});

list.addEventListener("click", (e) => {
  switch (e.target.tagName) {
    case "P":
      showEditInput(e.target);
      break;
    case "SPAN":
      removeTodo(e.target);
      break;
  }
});

list.addEventListener("change", (e) => {
  if (e.target.tagName === "INPUT" && e.target.type === "checkbox")
    toggleComplete(e.target);
});

function createTodo() {
  const text = todoText.value;

  if (text === "") return alert("Please enter a todo!");

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.textContent = text;

  let remove = document.createElement("span");
  remove.classList.add("remove");
  remove.innerHTML = "x";

  li.appendChild(checkbox);
  li.appendChild(paragraph);
  li.appendChild(remove);
  list.appendChild(li);

  todoText.value = "";
}

function removeTodo(element) {
  element.parentElement.remove();
}

function toggleComplete(element) {
  element.parentElement.classList.toggle("complete");
}

function showEditInput(paragraph) {
  //check if edit input already exists in the actual context
  let editAlreadyExists = document.getElementsByName("edit")[0];
  if (editAlreadyExists) editAlreadyExists.remove();

  let input = document.createElement("input");
  input.type = "text";
  input.name = "edit";
  input.value = paragraph.textContent;
  input.classList.add("edit");

  paragraph.parentElement.appendChild(input);
  input.focus();

  list.addEventListener("keypress", (e) => {
    if (
      e.target.tagName === "INPUT" &&
      e.target.type === "text" &&
      e.key === "Enter"
    )
      updateTodo();
  });
}

function updateTodo() {
  let input = document.getElementsByName("edit")[0];

  if (!input) return;

  if (input.value !== "") {
    let paragraph = input.parentElement.querySelector(".paragraph");
    paragraph.textContent = input.value;
  }

  input.remove();
}
