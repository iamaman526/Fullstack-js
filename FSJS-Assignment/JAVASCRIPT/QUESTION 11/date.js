//11. Use the Date object to do the following activities

let time = new Date();

let year = time.getFullYear();
//     - What is the year today?
console.log(year);
//     - What is the month today as a number?
let month = time.getMonth() + 1;
console.log(month);
//     - What is the date today?
let Todaysdate = time.getDate();
console.log(Todaysdate);
//     - What is the day today as a number?
let hour = time.getHours();
//     - What is the hours now?
console.log(hour);
let minute = time.getMinutes();
//     - What is the minutes now?
console.log(minute);
let seconds = time.getTime();
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(seconds);
