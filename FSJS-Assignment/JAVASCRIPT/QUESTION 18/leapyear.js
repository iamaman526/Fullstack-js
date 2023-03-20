// 18. Write a program which tells the number of days in a month, now consider leap year.

let year = parseInt(prompt("Enter the year"));
console.log(year);
let monthNamee = String(prompt("Enter the Month name "));
monthNamee =
  monthNamee.charAt(0).toUpperCase() + monthNamee.slice(1).toLocaleLowerCase();

if (year.toString().length !== 4) {
  alert("enter the correct year");
} else {
  if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
    if (
      monthNamee === "January" ||
      monthNamee === "March" ||
      monthNamee === "May " ||
      monthNamee === "July" ||
      monthNamee === "August" ||
      monthNamee === "October" ||
      monthNamee === "December"
    ) {
      console.log(`${monthNamee} has 31 Days`);
    } else if (
      monthNamee === "April" ||
      monthNamee === "June" ||
      monthNamee === "September" ||
      monthNamee === "November"
    ) {
      console.log(` ${monthNamee} has 30 Days`);
    } else if (monthNamee === "February") {
      console.log(`${monthNamee} has 29 Days`);
    } else {
      window.alert("enter the correct month");
    }
  } else {
    if (
      monthNamee === "January" ||
      monthNamee === "March" ||
      monthNamee === "May " ||
      monthNamee === "July" ||
      monthNamee === "August" ||
      monthNamee === "October" ||
      monthNamee === "December"
    ) {
      console.log(`${monthNamee} has 31 Days`);
    } else if (
      monthNamee === "April" ||
      monthName === "June" ||
      monthName === "September" ||
      monthName === "November"
    ) {
      console.log(` ${monthNamee} has 30 Days`);
    } else if (monthName === "February") {
      console.log(`${monthNamee} has 28 Days`);
    } else {
      window.alert("enter the correct month");
    }
  }
}
