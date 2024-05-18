const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

function addMarquees() {
    const container = document.querySelector('.container');
    const texts = [
        "Focus on you, until the Focus is on you!",
       
        
    ];

    texts.forEach((text, index) => {
        const marquee = document.createElement("marquee");
        marquee.className = "background-marquee";
        marquee.behavior = "scroll";
        marquee.direction = index % 2 === 0 ? "left" : "right";
        marquee.style.top = (10 + index * 40) + "px";
        marquee.innerHTML = text;
        container.appendChild(marquee);
    });
}

addMarquees();
