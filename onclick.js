var slider = document.getElementById("years");
var output = document.getElementById("period");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
