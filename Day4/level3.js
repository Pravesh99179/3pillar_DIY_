let months = prompt("enter month to check number of days");
switch (months) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${months} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${months} has 30 days`)
        break;
    case "febuary":
        console.log(`${months} has 29 days`)
        break;
    default:
        console.log("invalid month entered");
}