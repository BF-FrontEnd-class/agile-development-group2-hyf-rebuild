const options = document.querySelectorAll(".money-options-item");
const input = document.getElementById("money-input");
options.forEach((option) => {
  option.addEventListener("click", () => {
    const newValue = option.innerHTML;
    const newValueNumber = parseFloat(newValue);
    if (typeof newValueNumber == "number" && !isNaN(newValueNumber)) {
      input.value = newValueNumber;
    } else {
      input.value = 5000;
    }
  });
});
