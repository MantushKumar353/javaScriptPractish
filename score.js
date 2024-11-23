const students = [
    { name: "Alice", score: 70 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 60 },
];

const sum=students.filter(ele=>ele.score>80).map(ele=>ele.score).reduce((x,y)=>x+y,0);
console.log(sum);