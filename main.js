let isBlue = false;


function Clicked() {
  if (isBlue) {
    document.getElementById("buttonDiv").style.color="red";
  } else {
    document.getElementById("buttonDiv").style.color="blue";
  }
  isBlue = !isBlue;
}