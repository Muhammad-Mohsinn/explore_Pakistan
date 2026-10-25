// Small DOM script: live budget value and friendly submit message
const budget = document.getElementById("budget");
const budgetOut = document.getElementById("budgetOut");
const form = document.getElementById("bookingForm");
const status = document.getElementById("status");

budget.addEventListener("input", function () {
  budgetOut.textContent = Number(budget.value).toLocaleString();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  status.textContent = "Thank you, " + name + "! Your booking request has been received.";
  form.reset();
  budgetOut.textContent = Number(budget.value).toLocaleString();
});
