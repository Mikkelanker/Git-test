// opg 1
let course = "BINTO1064U.LA_E21";
//console.log(/\w/.test(course));
// opgave 2
//console.log(/\d+/.test(course));
// Opgave 3
//console.log(/^BINT/.test(course));
// Opgave 4
//let course = /[_]/.exec("BINTO1064U.LA_E21");
//console.log(course.index);
// Opgave 5
//console.log(course.match(/\w+\d+/));
// Man finder bogstaver indtil der kommer tal, man får derfor ikke bogstaver og tal med efter 64
//Opgave 6
//var regex = /(\w{4})(O)(\d+)(.*)/;
//course = course.replace(regex, "$1$3");
//console.log(course)
// Opgave 7
var regex1 = /(E21)/;
course = course.replace(regex, "F22");
console.log(course);


