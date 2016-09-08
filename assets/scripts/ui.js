'use strict';

$(()=>{
  $("#graph1").hide();
  $("#graph2").hide();
  $("#graph3").hide();
  $("#graph4").hide();

$("#graph-btn1").on("click", function (event) {
  event.preventDefault();
  $("#graph1").toggle();
});

$("#graph-btn2").on("click", function (event) {
  event.preventDefault();
  $("#graph2").toggle();
});

$("#graph-btn3").on("click", function (event) {
  event.preventDefault();
  $("#graph3").toggle();
});

$("#graph-btn4").on("click", function (event) {
  event.preventDefault();
  $("#graph4").toggle();
});
// TODO refactor this into one if else statement
// do something on document ready

// TODO change into a toggle instead maybe. May run into async issues with the data loading from multiple graphs. Load all on page load? on click?



});
