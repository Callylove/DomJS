//variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// event listeners for add tasks
addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);
    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
  </svg>`;
  checkButton.classList.add('checkTask');
  task.appendChild(checkButton);

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-x-circle"  viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
deleteButton.classList.add('deleteTask');
task.appendChild(deleteButton);
if(inputTask.value === ""){
    let msg = document.getElementById('error-msg');
    msg.style.backgroundColor = 'red';
    msg.innerHTML = "Please enter a task....";
    setTimeout(() => msg.remove(), 3000);
}else{
    taskContainer.append(task);
}
inputTask.value = ''; 

checkButton.addEventListener('click', function(){
    checkButton.parentElement.style.textDecoration = "line-through";

})
deleteButton.addEventListener('click', function(e){
    let target = e.target;
    target.parentElement.parentElement.remove();
})
})
