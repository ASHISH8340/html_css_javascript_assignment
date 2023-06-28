const findAverageGrade = (students) => {
  const totalGrade = students.reduce((acc, student) => acc + student.grade, 0);
  const averageGrade = totalGrade / students.length;
  return averageGrade;
};


const students = [
  { name: 'Ashish', grade: 80 },
  { name: 'Abhishek', grade: 90 },
  { name: 'Amith', grade: 75 },
  { name: 'Vipin', grade: 95 },
]

const average = findAverageGrade(students);
console.log('Average Grade:', average); 
