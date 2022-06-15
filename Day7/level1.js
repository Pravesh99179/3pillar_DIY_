//1
function fullName() {
    console.log("Pravesh Agrawal")
}
fullName()
//2
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("Pravesh", "Agrawal");
//3
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(4, 5));
//4
function area(length, width) {
    let area = length * width;
    return area;
}
console.log(area(3,4))
//6
perimeter= (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
console.log(perimeter(5, 4));