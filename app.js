// Get the necessary elements from the HTML document
const slider = document.getElementById("slider");
const sliderThumb = document.getElementById("slider-thumb");

// Set the minimum and maximum values for the slider
const minValue = 10;
const maxValue = 10000;

// Set the step size for the slider
const stepSize = 10;

// Update the value of the slider and the slider position
function updateSliderValue() {
  const value = slider.value;
  document.getElementById("slider-value").textContent = value;
  const sliderWidth = slider.offsetWidth;
  const thumbWidth = sliderThumb.offsetWidth;
  const position = ((value - minValue) / (maxValue - minValue)) * (sliderWidth - thumbWidth);
  sliderThumb.style.left = position + "px";
}

// Add event listener to the slider
slider.addEventListener("input", updateSliderValue);

// Set the attributes for the slider
slider.setAttribute("min", minValue);
slider.setAttribute("max", maxValue);
slider.setAttribute("step", stepSize);

// Initialize the slider value
updateSliderValue();