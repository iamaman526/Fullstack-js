//15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let Score = parseInt(prompt("Enter your Score: "));

if (Score >= 80 && Score <= 100) {
    alert("grade A")

} else if (Score >= 70) {
  alert("grade B");
} else if (Score >= 60) {
  alert("grade C");
} else if (Score >= 50) {
  alert("grade D");
} else if (Score >= 0 && Score <= 49) {
  alert("grade E");
} else {
  alert(`Invalid grade`);
}
console.log(Score);