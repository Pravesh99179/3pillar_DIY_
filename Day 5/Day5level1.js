//Day 5 Level 1
//1
let arr= new Array()
//2
var arr2=[1,2,3,4,45]
console.log(arr2)
//3
console.log(arr2.length)
//4
console.log(arr2[0])
//var a= arr2.length
console.log(arr2[2])
console.log(arr2[arr2.length-1])
//5
let mixedDataTypes= new Array()
mixedDataTypes=['a','b',1,2,3,4,true]
console.log(mixedDataTypes.length)
//6
let itCompanies= new Array()
itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
console.log(itCompanies[0])
var len= itCompanies.length
console.log(itCompanies[len/2])
console.log(itCompanies[itCompanies.length-1])
//10
for(let i=1; i<len; i++){
    console.log(itCompanies[i])
}
//11
for(let i=1; i<len; i++){
    var upc=itCompanies[i].toUpperCase()
    console.log(upc)
}
//12
var str1=itCompanies.toString()
console.log(str1)
//13
//let cn= prompt("Enter company name:")
/*if(itCompanies.includes(cn)){
    console.log("The company exists "+ cn)
}
else{
    console.log("company not found")
}*/
//14


//15
console.log(itCompanies.sort())
//16
console.log(itCompanies.reverse())
//17
console.log(itCompanies.slice(0,4))
//18
console.log(itCompanies.slice(4))
//19
let midindex=(itCompanies.length)/2
let postmid= midindex+1
console.log(itCompanies.slice(midindex,postmid+1))
//20
console.log(itCompanies.splice(0,1))
//21
let gg=itCompanies.splice(midindex)
console.log(gg)
//22
let gg2=itCompanies.shift(-1)
console.log(gg2)
//23
let gg3=itCompanies.splice()
console.log(gg3)