//1
let marks = Number(prompt("enter your marks"));
switch (true) {
    case marks > 80:
        console.log("A");
        break;
    case marks > 70:
        console.log("B");
        marks;
    case score > 60:
        console.log("C");
        marks;
    case score > 50:
        console.log("D");
        marks;
    case (score < 50):
        console.log("F");
        marks;
    default:
        console.log("no marks assigned")
}
//2
let month = prompt("enter month to check seasons");
switch (month) {
case "september":
case "october":
case "november":
    console.log("the season is Autumn");
    break;
case "december":
case "january":
case "febuary":
    console.log("the season is Winter");
    break;
case "march":
case "april":
case "may":
    console.log("the season is Spring");
    break;
case "june":
case "july":
case "august":
    console.log("the season is Summer");
    break;
default:
    console.log("invalid Month")
}
//3
let week = prompt("enter weekDay to check if it's a weekend")
if (week == "saturday" || week == "sunday") {
    console.log(`${week} is a weekend day`)
} else if (week == "monday" || week == "tuesday" || week == "wednesday" || week == "thursday" || week == "friday") {
    console.log(`${week} is a working day`)
} else {
    console.log("invalid weekday")
}