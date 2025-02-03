const form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.getElementById("height").value);

  const weight = parseInt(document.getElementById("weight").value);
  if (
    isNaN(height) ||
    isNaN(weight) ||
    height <= 0 ||
    weight <= 0 ||
    height === "" ||
    weight === ""
  ) {
    alert("Please enter valid height and weight");
  } else {
    const height_meter = height / 100;
    const bmi = (weight / (height_meter * height_meter)).toFixed(2);
    const result = document.getElementById("results");
    if (bmi < 18.6) {
      result.innerHTML = "UnderWeight";
      result.innerHTML = `<span>BMI is :${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = "Normal Weight";
      result.innerHTML = `<span>BMI is :${bmi}</span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = "Overweight";
      result.innerHTML = `<span>BMI is :${bmi}</span>`;
    }
  }
});
