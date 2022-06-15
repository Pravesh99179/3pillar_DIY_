//1
const userWithMaxSkills = users => Object.entries(users)
.reduce((res, [username, data]) => {
    if(data.skills.length > res.maxSkills){
      return {
        maxSkills: data.skills.length,
        user: {
          [username]: data
        }
      }
    }
    return res
}, 
 { 
  maxSkills: -1,
  user: undefined
 }
).user
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
}
console.log(userWithMaxSkills(users))
//
let valuesArray = Object.values(users);
//Printing all the keys  or properties of users object
for (let value of valuesArray) {
    console.log(value);
}
