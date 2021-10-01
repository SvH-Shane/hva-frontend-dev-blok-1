// JavaScript Document

//Drop the menu down nieuws!
var buttonNieuws = document.querySelector(".button-nieuws ");
var buttonSport = document.querySelector(".button-sport");
var nieuws = document.querySelector(".nieuws");
var sport = document.querySelector(".sport");
var navNieuwsMenu = document.getElementsByClassName('open-nieuws');

buttonNieuws.addEventListener("click", function() {
  nieuws.classList.toggle("open-nieuws");
});

buttonNieuws.addEventListener("click", function(){
	console.log('Er is op mij gedrukt!');
});

if (navNieuwsMenu.length > 0) {
	console.log('Er is al iets open');
} else {
	console.log('Het kan! het mag hij mag open!');
}



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
    localStorage.setItem("colorMode", JSON.stringify(false));
}
else {
    document.documentElement.classList.remove("lightMode");
    localStorage.setItem("colorMode", JSON.stringify(true));
}
