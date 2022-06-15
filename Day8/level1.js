//1
const dog={}
//2
console.log(dog)
//3
var dog2={
    name: 'tommy',
    legs: '4',
    color: 'brown',
    age: '2',
    bark: function(){
        return "woof woof"
    }
};
console.log(dog2, dog2.bark())
//4
console.log(dog2.name, dog2.legs, dog2.color, dog2.age, dog2.bark())
//5
var dog3={
    name: 'tommy',
    legs: '4',
    color: 'brown',
    age: '2',
    breed: "German Shephard",
    bark : function(){
        return `${this.name} ${this.breed}`;
    }
};
console.log(dog3.bark())