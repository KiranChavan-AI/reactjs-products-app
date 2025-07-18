//mutable as doing changes in same 
const arr= ['a','b'];
arr.push('c');
arr[0]='d'
arr.concat('e');
console.log(arr); 

const person={personId: 1, personName:"Kiran"}
person.personId=2;
console.log(person);
//to make Immutable copyarr
const copyarr={...person, personGender:"female", personName:"Swapnil"}
console.log('Immutable',copyarr, person);

const arr2= [...arr,'e'];
const arr3=arr2.concat('r');
console.log(arr2,arr3);