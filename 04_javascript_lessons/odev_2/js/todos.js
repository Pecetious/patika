function newElement() {
  var task = $("#task").val().trim();
  if (!task) {
    $("#toastError").toast("show");
  } else {
    console.log(task);
    var todoItem = {
      task: task,
      done: false,
    };
    saveTodos(todoItem);
    loadTodos();
    $("#toastSuccess").toast("show");
  }
}
function saveTodos(todo) {
  var existingTodos = JSON.parse(localStorage.getItem("todos"));
  if (existingTodos == null) existingTodos = [];
  existingTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(existingTodos));
}
function deleteTodo(task) {
  var existingTodos = JSON.parse(localStorage.getItem("todos"));
  var updatedTodos = existingTodos.filter((item) => {
    return item.task != task;
  });
  console.warn("deleted item");
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}
function toggleTodo(task) {
  var existingTodos = JSON.parse(localStorage.getItem("todos"));
  var updatedTodos = $.map(existingTodos, (item) => {
    if (item.task == task) item.done = !item.done;
    return item;
  });
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  loadTodos();
}
function loadTodos() {
  var todoList = $("#list");
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  todoList.empty();

  $.each(todos, function (index, todo) {
    var listItem = $("<li>")
      .html(`${todo.task}`)
      .click(() => {
        toggleTodo(todo.task);
      })
      .toggleClass("checked", todo.done);
    var removeButton = $("<button>")
      .html(`<span class="close" aria-hidden="true">&times;</span>`)
      .click(function () {
        listItem.remove();
        deleteTodo(todo.task);
      });

    listItem.append(removeButton);

    if (todo.done) {
      listItem.addClass("todo-done");
    }

    todoList.append(listItem);
  });
}
$(document).ready(function () {
  loadTodos();
});
