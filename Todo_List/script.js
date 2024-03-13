const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodos() {
  todoList.innerHTML = "";

  console.log(todos.length);

  if (todos.length === 0) {
    const listItem = document.createElement("li");
    listItem.textContent = "No task available";
    todoList.appendChild(listItem);
  } else {
    todos.forEach((todo, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo;

      const deleteButton = document.createElement("i");
      deleteButton.classList.toggle("fa");
      deleteButton.classList.toggle("fa-trash");
      deleteButton.addEventListener("click", () => {
        todos.splice(index, 1);
        renderTodos();
      });
      listItem.appendChild(deleteButton);

      todoList.appendChild(listItem);
    });
  }
}

addButton.addEventListener("click", () => {
  const newTodo = todoInput.value.trim();
  if (newTodo !== "") {
    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
  }
});
