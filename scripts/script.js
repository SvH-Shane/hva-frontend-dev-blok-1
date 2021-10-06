// JavaScript Document

//Drop the menu down nieuws!
var buttonNieuws = document.querySelector(".button-nieuws ");
var buttonSport = document.querySelector(".button-sport");
var nieuws = document.querySelector(".nieuws");
var sport = document.querySelector(".sport");

buttonNieuws.addEventListener("click", function() {
    if (sport.classList.contains("open")) {
        sport.classList.remove("open");
        nieuws.classList.add("open");
    } else if (nieuws.classList.contains("open")) {
        nieuws.classList.remove("open");
    } else {
        nieuws.classList.add("open");
    };
});

buttonSport.addEventListener("click", function() {
    if (nieuws.classList.contains("open")) {
        nieuws.classList.remove("open");
        sport.classList.add("open");
    } else if (sport.classList.contains("open")) {
        sport.classList.remove("open");
    } else {
        sport.classList.add("open");
    };
});

// DARK SCHEME ALS HET DONKER WORDT!
// Zorgt ervoor dat uren en minuten twee getalen worden.
Object.prototype.twoDigits = function () {
    return ("0" + this).slice(-2);
}
// Actuele tijd + Rond de tijd af
let now = new Date();
timeOfDay = now.getHours().twoDigits() + ':' + now.getMinutes().twoDigits();

if ('06:30' <= timeOfDay && timeOfDay <= '20:00') {
    document.documentElement.classList.add("lightMode");
}
else {
    document.documentElement.classList.remove("lightMode");
}
