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
    var option = readlineSync.question('>');
    switch (option) {
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            // console.log(students);
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;

        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}

function showStudents() {
    for(var student of students){
        console.log(student.name, student.age);
    }
}

function showCreateStudent() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    // console.log(content);
    fs.writeFileSync('./data.json', content, {encoding: 'utf-8'});
}

function main() {
    loadData();
    // console.log(students);
    showMenu();
}

main();
