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
    const result_number = document.getElementById("number_result");
    const result_text = document.getElementById("text_result");
    if (bmi < 18.6) {
      result_text.innerHTML = `<span>UnderWeight </span>`;
      result_number.innerHTML = `<span>BMI is :${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result_text.innerHTML = `<span>Normal Weight </span>`;
      result_number.innerHTML = `<span>BMI is :${bmi}</span>`;
    } else if (bmi > 24.9) {
      result_text.innerHTML = `<span>Overweight</span>`;
      result_number.innerHTML = `<span>BMI is :${bmi}</span>`;
    }
  }
});
