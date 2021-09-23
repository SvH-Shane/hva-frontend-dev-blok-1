// JavaScript Document

//Drop the menu down nieuws!
// TEMP: solution

var buttonNieuws = document.querySelector(".button-nieuws ");
var buttonSport = document.querySelector(".button-sport");
var nieuws = document.querySelector(".nieuws");
var sport = document.querySelector(".sport");

buttonNieuws.addEventListener("click", function() {
  nieuws.classList.toggle("open-nieuws");
});

buttonSport.addEventListener("click", function() {
  nieuws.classList.toggle("open");
  sport.classList.toggle("open-sport");
});
