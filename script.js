let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task").value;
    const timeInput = document.getElementById("time").value;

    if (taskInput && timeInput) {
        tasks.push({ task: taskInput, time: timeInput });
        document.getElementById("task").value = "";
        document.getElementById("time").value = "";
        renderTasks();
        suggestBestTime();
    } else {
        alert("Por favor, ingresa una tarea y una hora");
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((taskItem) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Tarea: ${taskItem.task} | Hora: ${taskItem.time}`;
        taskList.appendChild(listItem);

        anime({
            targets: listItem,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 800,
            easing: 'easeOutExpo'
        });
    });
}

function suggestBestTime() {
    const suggestedTimes = document.getElementById("suggestedTimes");
    suggestedTimes.innerHTML = "";

    tasks.forEach(taskItem => {
        const suggestedItem = document.createElement("li");
        const hour = parseInt(taskItem.time.split(":")[0]);
        let suggestedTime;
        if (hour < 12) {
            suggestedTime = "Sugerencia: Completar en la mañana, cuando estás más productivo.";
        } else if (hour < 18) {
            suggestedTime = "Sugerencia: Completar en la tarde, pero toma un descanso.";
        } else {
            suggestedTime = "Sugerencia: Completar en la noche, pero planifica bien tu tiempo.";
        }

        suggestedItem.textContent = `Tarea: ${taskItem.task} | ${suggestedTime}`;
        suggestedTimes.appendChild(suggestedItem);
        anime({
            targets: suggestedItem,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 800,
            easing: 'easeOutExpo'
        });
    });
}
document.getElementById("addTaskBtn").addEventListener("click", addTask);
anime({
    targets: '.title',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo'
});
anime({
    targets: '.subtitle',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutExpo'
});
anime({
    targets: 'body',
    backgroundPosition: ['0% 50%', '100% 50%'],
    duration: 10000,
    loop: true,
    easing: 'linear'
});
