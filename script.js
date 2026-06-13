// ===========================
// UPSC Portal Script
// ===========================

// Load progress when page opens

window.onload = function () {

    let savedProgress = localStorage.getItem("upsc_progress");

    if(savedProgress){

        document.getElementById("progress-fill").style.width =
        savedProgress + "%";

        document.getElementById("progress-fill").innerHTML =
        savedProgress + "%";
    }

    updateCountdown();
};


// ===========================
// Progress Tracker
// ===========================

function increaseProgress(){

    let current =
    parseInt(localStorage.getItem("upsc_progress")) || 0;

    current += 5;

    if(current > 100){
        current = 100;
    }

    document.getElementById("progress-fill").style.width =
    current + "%";

    document.getElementById("progress-fill").innerHTML =
    current + "%";

    localStorage.setItem("upsc_progress", current);
}


// ===========================
// UPSC Countdown
// ===========================

function updateCountdown(){

    // Change this when UPSC date announced

    const examDate =
    new Date("May 24, 2027 09:00:00").getTime();

    const today = new Date().getTime();

    const distance = examDate - today;

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    if(document.getElementById("countdown")){

        document.getElementById("countdown").innerHTML =
        days + " Days Remaining";
    }
}

setInterval(updateCountdown,1000);


// ===========================
// Notes Storage
// ===========================

function saveNotes(){

    const notes =
    document.getElementById("notesArea").value;

    localStorage.setItem("upsc_notes",notes);

    alert("Notes Saved");
}


function loadNotes(){

    const notes =
    localStorage.getItem("upsc_notes");

    if(document.getElementById("notesArea")){

        document.getElementById("notesArea").value =
        notes || "";
    }
}


// ===========================
// Planner Storage
// ===========================

function saveTask(){

    let task =
    document.getElementById("taskInput").value;

    if(task === ""){
        return;
    }

    let tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    loadTasks();
}


function loadTasks(){

    let list =
    document.getElementById("taskList");

    if(!list){
        return;
    }

    list.innerHTML = "";

    let tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {

        let li =
        document.createElement("li");

        li.textContent = task;

        list.appendChild(li);
    });
}


// ===========================
// Quiz Score Storage
// ===========================

function saveQuizScore(score){

    localStorage.setItem(
        "quizScore",
        score
    );
}


function loadQuizScore(){

    let score =
    localStorage.getItem("quizScore");

    if(document.getElementById("score")){

        document.getElementById("score").innerHTML =
        score || 0;
    }
}


// ===========================
// Initialize
// ===========================

loadNotes();
loadTasks();
loadQuizScore();
