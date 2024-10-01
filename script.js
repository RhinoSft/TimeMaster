// Array para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask() {
    const taskInput = document.getElementById("task").value;
    const timeInput = document.getElementById("time").value;

    if (taskInput && timeInput) {
        tasks.push({ task: taskInput, time: timeInput });
        document.getElementById("task").value = "";  // Limpiar campo de tarea
        document.getElementById("time").value = "";  // Limpiar campo de tiempo
        renderTasks();
        suggestBestTime();
    } else {
        alert("Por favor, ingresa una tarea y una hora");
    }
}

// Función para renderizar las tareas en la lista
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";  // Limpiar la lista

    tasks.forEach((taskItem) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Tarea: ${taskItem.task} | Hora: ${taskItem.time}`;
        taskList.appendChild(listItem);

        // Animación de aparición con anime.js
        anime({
            targets: listItem,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 800,
            easing: 'easeOutExpo'
        });
    });
}

// Función para sugerir el mejor tiempo para realizar la tarea
function suggestBestTime() {
    const suggestedTimes = document.getElementById("suggestedTimes");
    suggestedTimes.innerHTML = "";  // Limpiar sugerencias anteriores

    tasks.forEach(taskItem => {
        const suggestedItem = document.createElement("li");
        const hour = parseInt(taskItem.time.split(":")[0]); // Extraer la hora
        let suggestedTime;

        // Proceso básico para sugerir mejor tiempo basado en la hora de la tarea
        if (hour < 12) {
            suggestedTime = "Sugerencia: Completar en la mañana, cuando estás más productivo.";
        } else if (hour < 18) {
            suggestedTime = "Sugerencia: Completar en la tarde, pero toma un descanso.";
        } else {
            suggestedTime = "Sugerencia: Completar en la noche, pero planifica bien tu tiempo.";
        }

        suggestedItem.textContent = `Tarea: ${taskItem.task} | ${suggestedTime}`;
        suggestedTimes.appendChild(suggestedItem);

        // Animación de aparición con anime.js
        anime({
            targets: suggestedItem,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 800,
            easing: 'easeOutExpo'
        });
    });
}

// Evento para el botón "Agregar Tarea"
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Animación de entrada para el título
anime({
    targets: '.title',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo'
});

// Animación de entrada para el subtítulo
anime({
    targets: '.subtitle',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutExpo'
});

// Animación de fondo
anime({
    targets: 'body',
    backgroundPosition: ['0% 50%', '100% 50%'],
    duration: 10000,
    loop: true,
    easing: 'linear'
});
