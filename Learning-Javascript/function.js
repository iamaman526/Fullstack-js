//function

function sum(num1, num2) {
  //defination of fn
  //   let num1 = 16;
  //   let num2 = 25;  //parameters i.e variable which holds the value

  console.log("addition to the", num1 + num2);
}

sum(16, 25); //calling of fn
sum(52.61);
sum(10, 11);
sum(10, 20);
sum(75, 85);
sum(30, 67);
sum(65, 54);
sum(65, 66);
sum(65, "aman");

function sum(val1,val2) {
    let result = val1 + val2;
    return result;
    
}

 let add = sum(10, 25);
 console.log(add);

 let add1 = sum(1,43 );
 console.log(add1);

 //string function

 function URL(url, domian) {
    let con = 'https://';
    let result = con + url + domian;
    return result;
 }

 let aman = URL('AMAN','.COM')
 console.log(aman);