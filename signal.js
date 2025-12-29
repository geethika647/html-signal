let redLight = document.getElementById("red");
let orangeLight = document.getElementById("orange");
let greenLight = document.getElementById("green");

let redBtn = document.getElementById("btn1");
let orangeBtn = document.getElementById("btn2");
let greenBtn = document.getElementById("btn3");
function turnOff(){
    redLight.style.backgroundColor="grey";
    orangeLight.style.backgroundColor="grey";
greenLight.style.backgroundColor="grey";
}

redBtn.onclick = function () {
    redLight.style.backgroundColor = "red";
    orangeLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "grey";
    setTimeout(turnOff,3000);
};

orangeBtn.onclick = function () {
    redLight.style.backgroundColor = "grey";
    orangeLight.style.backgroundColor = "orange";
    greenLight.style.backgroundColor = "grey";
    setTimeout(turnOff,3000);
};

greenBtn.onclick = function () {
    redLight.style.backgroundColor = "grey";
    orangeLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "green";
    setTimeout(turnOff,3000);
};
 