//1
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars)
//2
let chars2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let rand = Math.floor(Math.random() * chars2.length);
let randChars = "";
for (let i = 0; i < rand; i++) {
    let random = Math.floor(Math.random() * chars2.length);
    randChars += chars2[random];
}
console.log(randChars);
//3
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }
random_bg_color();
//4
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
    newCountries.push([countries[i], countries[i].slice(0, 3), countries[i].length])
}
console.log(newCountries)
let countWithoutLand = []
let countWithLand = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("LAND")) {
        countWithLand.push(countries[i]);
    } else {
        countWithoutLand.push(countries[i])
    }
}
//4
let count_with_Ia = []
let count_without_Ia = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("IA")) {
        count_with_Ia.push(countries[i]);
    } else {
        count_without_Ia.push(countries[i])
    }
}
console.log(`countries with "ia" ${count_with_Ia}`);
console.log(`countries without "ia" ${count_without_Ia}`)
//5
let countries_char_length = [];
for (let i = 0; i < countries.length; i++) {
    countries_char_length.push(countries[i].length);
}
console.log(countries_char_length);
//9
let highest;
highestNum = Math.max.apply(null, countries_char_length);
console.log(countries[countries_char_length.indexOf(highestNum)]);
//10
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
}
console.log(countriesWithFiveChars)
//13
let MERNStack = ["MongoDb", "Express", "React", "Node"]
let MERN = "";
for (let i = 0; i < MERNStack.length; i++) {
    MERN += MERNStack[i].slice(0, 0);
}
console.log(MERN)
//14
let tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < tech.length; i++) {
    console.log(tech[i])
}
//15
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
