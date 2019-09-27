var readlineSync =  require('readline-sync');
var fs = require('fs');

var students = [];
function loadData() {
    var fileContent = fs.readFileSync('./data.json', { encoding: 'utf8' }); //fileContent is a string
    // console.log(fileContent);
    students = JSON.parse(fileContent); //covert string to object students.
}

function showMenu() {
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save and Exit');
}

function showStudents() {
    for(var student of students){
        console.log(student.name, student.age);
    }
}

function main() {
    loadData();
    // console.log(students);
    showMenu();
    var option = readlineSync.question('>');
    switch (option) {
        case '1':
            showStudents();
            break;
        case '2':
            showCreateStudent();
            break;
        case '3':
            saveAndExit();
            break;
    
        default:
            console.log('Wrong option');
            break;
    }

}

main();
