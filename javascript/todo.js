const button = document.querySelector("button");
const list = document.getElementById("list");
const item = document.getElementById("item");
const form = document.querySelector("form");
const taskList = document.getElementById("taskList");

button.addEventListener("click", () => {
  let task = item.value;

  list.innerHTML += `<li>${task}</li>`;

  item.value = "";
  storage();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let task = item.value;

  list.innerHTML += `<li>${task}</li>`;

  item.value = "";

  storage();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storage();
});

// STOCKAGE / STORAGE

const storage = () => {
  window.localStorage.task = list.innerHTML;
};

const getValue = () => {
  let storageContent = window.localStorage.task;
  if (!storageContent) {
    list.innerHTML = "<li>Ajoutez une tâche</li>";
  } else {
    list.innerHTML = storageContent;
  }
};

getValue();
