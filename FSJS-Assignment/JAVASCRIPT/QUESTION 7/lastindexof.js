//  07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let arr = [
 
  "Hitesh sir",
  "pw skills",
  "Anurag sir ",
  " Anirudh sir ",
  "Vinay sir",
  "pw skills",
  "ineuron",
];

let positionAtlastIndexof = arr.lastIndexOf("pw skills");

console.log(positionAtlastIndexof);

let positionAtfirstIndexof = arr.lastIndexOf("pw skills", -arr.length + 1);

console.log(positionAtfirstIndexof);
