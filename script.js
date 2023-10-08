document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.querySelector("ul");
  const addBtn = document.getElementById("add");

  // Function to add a new task
  function addNewTask() {
    // Get the value of the input field
    const inputTask = document.querySelector(".input-task").value;

    // Create a new task element
    const newTask = document.createElement("li");
    newTask.innerHTML = `
        <div class="task-container">
          <div class="task">
            <a href="#" class="check-btn" hidden>
              <svg xmlns="http://www.w3.org/2000/svg" class="check" width="53" height="53" viewBox="0 0 53 53" fill="none">
                <rect width="53" height="53" rx="26.5" fill="black"/>
                <path d="M20.1818 41.3298C18.8214 40.3841 18.4852 38.5146 19.431 37.1541L36.0222 13.2879C36.9679 11.9274 38.8374 11.5913 40.1979 12.537C41.5583 13.4827 41.8945 15.3522 40.9487 16.7127L24.3575 40.5789C23.4118 41.9394 21.5423 42.2755 20.1818 41.3298Z" fill="#14FF00"/>
                <path d="M10.8787 27.9577C12.0503 26.7862 13.9497 26.7862 15.1213 27.9577L23.6114 36.4478C24.7830 37.6194 24.7830 39.5189 23.6114 40.6905C22.4399 41.8621 20.5404 41.8621 19.3688 40.6905L10.8787 32.2004C9.70711 31.0288 9.70711 29.1293 10.8787 27.9577Z" fill="#14FF00"/>
              </svg>
            </a>
            <a href="#" class="uncheck-btn" >
              <div class="uncheck"></div>
            </a>
            <div class="task-description not" type="text">${inputTask}</div>
          </div>
          <a href="#" class="delete">
            <div class="delete-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="7.62939e-06" y="17.6777" width="25" height="5" rx="2.5" transform="rotate(-45 7.62939e-06 17.6777)" fill="#FF0000"/>
                <rect x="3.53554" width="25" height="5" rx="2.5" transform="rotate(45 3.53554 0)" fill="#FF0000"/>
                <rect x="0.5" y="0.5" width="20.2132" height="20.2132" stroke="black"/>
              </svg>
            </div>
          </a>
        </div>
      `;

    // Add event listeners for the new task
    const checkBtn = newTask.querySelector(".check-btn");
    const uncheckBtn = newTask.querySelector(".uncheck-btn");
    const taskDescription = newTask.querySelector(".task-description");

    checkBtn.addEventListener("click", function (event) {
      event.preventDefault();

      // Hide the "check" button and show the "uncheck" button
      checkBtn.style.display = "none";
      uncheckBtn.style.display = "inline";

      // Change the class of the input element
      taskDescription.classList.remove("done");
      taskDescription.classList.add("not");
    });

    uncheckBtn.addEventListener("click", function (event) {
      event.preventDefault();

      // Show the "check" button and hide the "uncheck" button
      uncheckBtn.style.display = "none";
      checkBtn.style.display = "inline";

      // Change the class of the input element
      taskDescription.classList.remove("not");
      taskDescription.classList.add("done");
    });

    taskList.appendChild(newTask);

    // Add a click event listener to the delete button of the new task
    const deleteButton = newTask.querySelector(".delete-btn");
    deleteButton.addEventListener("click", deleteTask);
  }

  // Function to delete a task
  function deleteTask(event) {
    event.preventDefault();

    // Find the parent .task-container element and remove it
    const taskContainer = event.target.closest(".task-container");
    if (taskContainer) {
      taskContainer.remove();
    }
  }

  // Add task when the "Add" button is clicked
  addBtn.addEventListener("click", function (event) {
    if (document.querySelector(".input-task").value != "") {
      event.preventDefault();
      addNewTask();
      document.querySelector(".input-task").value = "";
    }
  });
});
