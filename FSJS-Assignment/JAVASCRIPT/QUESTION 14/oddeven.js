// ### 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let value = parseInt(prompt("enter the number to check even or odd"));

let num = (findnum) => {
  if (findnum <= 1) {
    prompt(`enter value greatar than 1`);
  } else if (findnum % 2 === 0) {
    prompt(`The number : ${value} is even`);
  } else {
    return prompt(`The number : ${value} is odd`);
  }
};
num(value);
