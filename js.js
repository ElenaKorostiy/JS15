
const tasks = JSON.parse(localStorage.getItem("tasks")) || ["Завдання 1", "Завдання 2", "Завдання 3"];


function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    for (const task of tasks) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.append(li);
    }
}

// Запуск функції оновлення списку при завантаженні сторінки
window.addEventListener("load", updateTaskList);

// Заборона видалення завдань
window.addEventListener("beforeunload", function (event) {
    event.returnValue = "Ви впевнені, що хочете залишити цю сторінку?";
});