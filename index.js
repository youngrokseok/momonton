const daysOfWeek = ["Mon", "Tue", "Wed"];

function printDaysOfWeek(value) {
    text += "<li>" + value + "</li>";    
}

let text = "<ul>";
daysOfWeek.forEach(printDaysOfWeek);
text += "</ul>";

//document.getElementById("demo").innerHTML = text;

const youngrokInfo = {
    name: "Youngrok",
    age: 36,
    gender: "Mail",
    isHandsome: true,
    allInfo: function() {
        return `Name: ${this.name}, 
                Age: ${this.age}, 
                Gender: ${this.gender},
                isHandsome? ${this.isHandsome}`;
    }
}

//document.getElementById("youngrokInfo").innerHTML = youngrokInfo.allInfo();

//const title = document.getElementById("title");
const title = document.querySelector("#title");
//title.innerHTML = "Hello everyone!";
document.title = "I own you now"

const CLICKED_CLASS = "clicked";

function handleClick(event) {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
//    title.addEventListener("click", handleClick);
}

init();
