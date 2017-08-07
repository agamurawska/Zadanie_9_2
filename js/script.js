
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

//one table with all names

var allNames = femaleNames.concat(maleNames);

console.log(allNames); 

//add new random name

var nextName = 'Aga';

allNames.splice(2, 0, nextName);

console.log(allNames);

//add new name from excercise

var newName = 'Marian',
indexOfnewName = allNames.indexOf('newName');

console.log('the result is' + indexOfnewName + 'position');


if (indexOfnewName === -1) {
	allNames.push (newName)
};
console.log(allNames);