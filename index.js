var ursChsnSqnc = [];
var gmPttrn = [];
var clrSqnc = ["red", "blue", "green", "yellow"];

var strt = false;
var lvl = 0;

$(document).keypress(function () {
  if (!strt) {
    $("#level-title").text("Level " + lvl);
    ranSqnc();
    strt = true;
  }
});

$(".btn").click(function () {
  var usrChsnClr = $(this).attr("id");
  ursChsnSqnc.push(usrChsnClr);
  var usrChsnId = "#" + usrChsnClr;
  anmtPrs(usrChsnId);
  plSnd(usrChsnClr);
});

function ranSqnc() {
  lvl++;
  $("#level-title").text("Level " + lvl);
  var ri = Math.floor(Math.random() * 4);
  var ranClr = clrSqnc[ri];
  gmPttrn.push(ranClr);
  $("#" + ranClr)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  plSnd(ranClr);
}

function plSnd(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function anmtPrs(Id) {
  $(Id).addClass("pressed");
  setTimeout(function () {
    $(Id).removeClass("pressed");
  }, 100);
}
