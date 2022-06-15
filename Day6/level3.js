//1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  numbersCopy = [];
  for (i = 0; i < countries.length; i++) {
    numbersCopy[i] = countries[i];
  }
  console.log(numbersCopy)
  //2
  var sortedCountries= numbersCopy.reverse()
  console.log(sortedCountries)
  //3
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  console.log(webTechs.sort())
  //4
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  console.log(mernStack.sort())
  //5
  var revcountries=countries.reverse()
  const upper = revcountries.map(element => {
    return element.toUpperCase();
  });
  numbersCopy2 = [];
  for (i = 0; i < upper.length; i++) {
    numbersCopy2[i] = upper[i];
  }
  console.log(numbersCopy2)