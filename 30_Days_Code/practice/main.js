const input = document.getElementById("input");

console.log(input.value);

input.addEventListener("change", function () {
  console.log(input.value);
  input.value = "Naresh";
});
