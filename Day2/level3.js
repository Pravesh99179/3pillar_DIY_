//Day 2 Exercise Level 3
//1
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let str1= sentence.toLowerCase()
console.log(str1.split("love").length)
//2
let str2='You cannot end a sentence with because because because is a conjunction'
console.log(str2.match("because"))
//3
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const newstr=sentence2.replace("")