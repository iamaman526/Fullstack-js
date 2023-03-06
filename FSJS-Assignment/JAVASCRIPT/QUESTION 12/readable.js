// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm




const readable = new Date()

 const year = (readable.getFullYear() + "0");
 const month = ( "0" + (readable.getMonth() + 1)) .slice((-2))
 const date  = ( "0" +readable.getDate()).slice(-2);
 const hour = ("0" + readable.getHours()).slice(-2); // add leading zero to hour  //last digit move out
 const minutes = ( "0"+readable.getMinutes()).slice(-2);

 console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
 console.log(`${date}-${month}-${year} ${hour}:${minutes}`);
 console.log(`${date}/${month}/${year} ${hour}:${minutes}`);