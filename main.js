const buttons = $("#buttons > span");
const size = buttons.length;
const imgWidth = 220;
let n = 0;

for (let i = 0; i < size; i++) {
  buttons.eq(i).on("click", function(e) {
    let $currentBtn = $(e.currentTarget);
    let index = $currentBtn.index();
    slideImage(index);
    highLightBtn($currentBtn);
    n = index;
  });
}

let timerId = setTimer();

$(".window").mouseenter(function() {
  window.clearInterval(timerId);
});

$(".window").mouseleave(function() {
  timerId = setTimer();
});

function slideImage(index) {
  let distance = -index * 220;
  $("#images").css({
    transform: "translate(" + distance + "px)"
  });
}

function highLightBtn($currentBtn) {
  $currentBtn
    .addClass("red")
    .siblings(".red")
    .removeClass("red");
}

function setTimer() {
  return setInterval(function() {
    slideTrigger(n % size);
    n++;
  }, 1000);
}

function slideTrigger(index) {
  buttons.eq(index).trigger("click");
}
