function hide(){
  var x = document.getElementById("ready");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function playit(){
  var audio = document.getElementById("audio");
  if (audio.paused)
    audio.play();
  else
    audio.pause();
}

var audio = document.getElementById("audio");

function setVolume() {
  // adjust the below value to make it louder
  audio.volume = 0.3;
}
setVolume();
window.onload = init;

function init() {
  console.log("window has loaded");
  state.f = 1;
  state.t = 1;
  state.b = 1;
  state.s = 1;


}

var state = {
  f: 0,
  t: 0,
  b: 0,
  s: 0
};


function hair1() {
  var hair = document.getElementById("hair");
  hair.setAttribute("class", "hair1")
}
function hair2() {
  var hair = document.getElementById("hair");
  hair.setAttribute("class", "hair2")
}
function hair3() {
  var hair = document.getElementById("hair");
  hair.setAttribute("class", "hair3")
}
function hair4() {
  var hair = document.getElementById("hair");
  hair.setAttribute("class", "hair4")
}
function hair5() {
  var hair = document.getElementById("hair");
  hair.setAttribute("class", "hair5")
}


function face1() {
  var face = document.getElementById("face");
  face.setAttribute("class", "face1")
} function face2() {
  var face = document.getElementById("face");
  face.setAttribute("class", "face2")
} function face3() {
  var face = document.getElementById("face");
  face.setAttribute("class", "face3")
} function face4() {
  var face = document.getElementById("face");
  face.setAttribute("class", "face4")
} function face5() {
  var face = document.getElementById("face");
  face.setAttribute("class", "face5")
}

function acc1() {
  var acc = document.getElementById("accessories");
  acc.setAttribute("class", "acc1")
}
function acc2() {
  var acc = document.getElementById("accessories");
  acc.setAttribute("class", "acc2")
}
function acc3() {
  var acc = document.getElementById("accessories");
  acc.setAttribute("class", "acc3")
}
function acc4() {
  var acc = document.getElementById("accessories");
  acc.setAttribute("class", "acc4")
}
function acc5() {
  var acc = document.getElementById("accessories");
  acc.setAttribute("class", "acc5")
}
function acc6() {
  var acc = document.getElementById("accessories");
  acc.setAttribute("class", "acc6")
}
function acc7() {
  var acc = document.getElementById("accessories");
  acc.setAttribute("class", "acc7")
}
function accundo() {
  var acc = document.getElementById("accessories");
  acc.removeAttribute("class")
}






function top1() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top1")
}
function top2() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top2")
}
function top3() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top3")
}
function top4() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top4")
}
function top5() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top5")
}
function top6() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top6")
}
function top7() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top7")
}
function top8() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top8")
}
function top9() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top9")
}
function top10() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top10")
}
function top11() {
  var top = document.getElementById("top");
  top.setAttribute("class", "top11")
}

function topundo() {
  var top = document.getElementById("top");
  top.removeAttribute("class")
}




function bottom1() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom1")
}
function bottom2() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom2")
}
function bottom3() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom3")
}
function bottom4() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom4")
}
function bottom5() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom5")
}
function bottom6() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom6")
}
function bottom7() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom7")
}
function bottom8() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom8")
}
function bottom9() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom9")
}
function bottom10() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom10")
}
function bottom11() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom11")
}
function bottom12() {
  var bottom = document.getElementById("bottom");
  bottom.setAttribute("class", "bottom12")
}
function bottomundo() {
  var bottom = document.getElementById("bottom");
  bottom.removeAttribute("class")
}




function feet1() {
  var feet = document.getElementById("feet");
  feet.setAttribute("class", "feet1")
}
function feet2() {
  var feet = document.getElementById("feet");
  feet.setAttribute("class", "feet2")
}
function feet3() {
  var feet = document.getElementById("feet");
  feet.setAttribute("class", "feet3")
}
function feet4() {
  var feet = document.getElementById("feet");
  feet.setAttribute("class", "feet4")
}
function feet5() {
  var feet = document.getElementById("feet");
  feet.setAttribute("class", "feet5")
}
function feet6() {
  var feet = document.getElementById("feet");
  feet.setAttribute("class", "feet6")
}
function feet7() {
  var feet = document.getElementById("feet");
  feet.setAttribute("class", "feet7")
}

function feetundo() {
  var feet = document.getElementById("feet");
  feet.removeAttribute("class")
}



