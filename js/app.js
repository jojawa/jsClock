var runClock = function(){
  var time = new Date();

  var hour = time.getHours()%12; //modulo ensures 12h rotation within 24h structure
  var min = time.getMinutes();
  var sec = time.getSeconds();

  var hrHand = document.querySelector(".hour");
  var minHand = document.querySelector(".minute");
  var secHand = document.querySelector(".second");

  var hrHandPos = hour * (360/12) + min * (30/60); //(12 position changes every 360deg)+(make transition smoother)
  var minHandPos = min * (360/60) + sec * (6/60); 
  var secHandPos = sec * (360/60); //(60 position changes every 360deg)

  hrHand.style.transform = "rotate(" + hrHandPos + "deg)";
  minHand.style.transform = "rotate(" + minHandPos + "deg)";
  secHand.style.transform = "rotate(" + secHandPos + "deg)";

  requestAnimationFrame(runClock);
};
runClock();//runs code on page load
