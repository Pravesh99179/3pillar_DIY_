//Day 3 Level 3
//1
const timestamp = 1301090400;
const date2 = new Date(timestamp * 1000);
const datevalues = [
   date2.getFullYear(),
   date2.getMonth()+1,
   date2.getDate(),
   ("0"+(date2.getHours())).slice(-2),
   ("0"+(date2.getMinutes())).slice(-2),
];
console.log(datevalues)