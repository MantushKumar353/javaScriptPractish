const employees = [
    { name: "A", salary: 5000 },
    { name: "B", salary: 7000 },
    { name: "C", salary: 6000 },
];
let len=employees.length;
const sum=(employees.map(ele=>ele.salary).reduce((x,y)=>x+y,0))/len;
console.log(sum);