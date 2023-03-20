// ### 17. Write a program which tells the number of days in a month.

let monthName = String(prompt("Enter a month name:"));
monthName =
  monthName.charAt(0).toUpperCase() + monthName.slice(1).toLocaleLowerCase();

if (
  monthName === "January" ||
  monthName === "March" ||
  monthName === "May " ||
  monthName === "July" ||
  monthName === "August" ||
  monthName === "October" ||
  monthName === "December"
) {
  console.log(`${monthName} has 31 Days`);
} else if (
  monthName === "April" ||
  monthName === "June" ||
  monthName === "September" ||
  monthName === "November"
) {
  console.log(` ${monthName} has 30 Days`);
} else if (monthName === "February") {
  console.log(`${monthName} has 28 Days`);
} else {
  window.alert("enter the correct month");
}