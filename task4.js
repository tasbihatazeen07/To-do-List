document.addEventListener("DOMContentLoaded", function() {
  const addTaskForm = document.getElementById("add-task-form");
  const newTaskInput = document.getElementById("new-task-input");
  const pendingTasksList = document.getElementById("pending-tasks");
  const completedTasksList = document.getElementById("completed-tasks");

  addTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskName = newTaskInput.value.trim();
    if (taskName !== "") {
      const newTask = createTask(taskName);
      pendingTasksList.appendChild(newTask);
      newTaskInput.value = "";
    }
  });

  function createTask(taskName) {
    const task = document.createElement("li");
    task.textContent = taskName;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function() {
      completeTask(task);
    });
    task.appendChild(completeButton);
    return task;
  }

  function completeTask(task) {
    const taskText = task.textContent;
    const completedTask = document.createElement("li");
    completedTask.textContent = taskText;
    completedTask.classList.add("completed");
    completedTasksList.appendChild(completedTask);
    task.remove();
  }
});