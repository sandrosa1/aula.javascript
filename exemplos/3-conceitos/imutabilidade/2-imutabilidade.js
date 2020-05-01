const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(students => students.grade >= 7);   
}
console.log('Alnos aprovados');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);