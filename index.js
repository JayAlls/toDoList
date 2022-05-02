const addBtn = document.getElementById("addBtn");
const task = document.getElementById("task");
const todolist = document.getElementById("todoList");

const addTodo = (e) => {
  e.preventDefault();

  // créer une div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");

  // créer le li
  const newTodo = document.createElement("li");
  const taskInput = task.value;
  newTodo.innerText = taskInput;
  newTodo.classList.add("todoLi");
  tododiv.appendChild(newTodo);

  // ajouter le bouton pour supprimer au li
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("closeBtn");
  tododiv.appendChild(trashBtn);

  // ajouter la div dans la todolist
  todolist.appendChild(tododiv);

  task.value = "";
};

const delTask = (e) => {
  const item = e.target;
  const todo = item.parentElement;
  if (item.className === "closeBtn") {
    todo.remove();
  }

  if (item.className === "todoLi") {
    todo.classList.toggle("checked");
  }
};

todolist.addEventListener("click", delTask);
addBtn.addEventListener("click", addTodo);
