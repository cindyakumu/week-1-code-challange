let score = 90;

//creating grading function
function grades () {
if (score >= 0 && score < 100) {

if (score >=80) {
    console.log ('GRADE A');
}
else if (score >= 60) {
    console.log ('GRADE B');
}
else if (score >= 50) {
    console.log ('GRADE C');
}
else if (score >= 40) {
    console.log ('GRADE D');
}
else  {
    console.log ('GRADE E');
};
}
else {
console.log ('invalid score');
}
}
// calling grades function

grades();