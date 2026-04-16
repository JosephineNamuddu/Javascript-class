const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

button.addEventListener("click", addTodo);

function addTodo() {
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${task}</span>
    <div>
      <button onclick="toggleComplete(this)">✔</button>
      <button onclick="deleteTodo(this)">❌</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";
}

function deleteTodo(btn) {
  btn.parentElement.parentElement.remove();
}

function toggleComplete(btn) {
  const li = btn.parentElement.parentElement;
  li.classList.toggle("completed");
}

function saveTasks() {
  localStorage.setItem("todos", list.innerHTML);
}

function loadTasks() {
  list.innerHTML = localStorage.getItem("todos") || "";
}

button.addEventListener("click", () => {
  addTodo();
  saveTasks();
});

list.addEventListener("click", saveTasks);

window.onload = loadTasks;