confirmButton.addEventListener("click", () => {
  const normalWon = Number(hourlyRate.value) * Number(normalHour.value);
  const extraWon = Number(hourlyRate.value) * 1.25 * Number(extraHour.value);
  const ultraWon = Number(hourlyRate.value) * 1.5 * Number(ultraHour.value);
  const withoutExpenses = (normalWon + extraWon + ultraWon) * 1.1 * 1.1 * 0.8;
  const expenses =
    Number(travellingExpenses.value) +
    Number(foodBasket.value) +
    Number(soilingBonus.value);
  const expensesWon = expenses * Number(workingDay.value);
  result.innerHTML = withoutExpenses + expensesWon;
  console.log(withoutExpenses);
  console.log(expensesWon);
});
