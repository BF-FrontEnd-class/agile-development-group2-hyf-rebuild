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

/** Title animation for the program**/
let i = 0,
  text;
text = "elcome, Your career starts here!!";

function typing() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();
