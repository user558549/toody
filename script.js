const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
todoForm.addEventListener("submit", formHandler);
let btn = document.querySelector("#btn");

function formHandler(event) {
  event.preventDefault();
  const taskText = todoInput.value;
  const newTask = document.createElement("li");
  newTask.innerText = taskText;
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.innerText = "Удалить";
  deleteBtn.style.marginLeft = "10px";
  newTask.append(deleteBtn);
  deleteBtn.addEventListener("click", function () {
    this.closest("li").remove();
  });

  todoList.append(newTask);

  todoInput.value = "";
}
let counter = 0;

btn.onclick = function () {
  counter = counter + 1;
  console.log(counter);
  if (counter === 8) {
    //todoForm.removeEventListener("submit", formHandler);
    btn.classList.add = "none";
    console.log(btn);
  }
};
