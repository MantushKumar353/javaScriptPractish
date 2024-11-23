const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 35 },
    { name: "Mark", age: 40 },
    { name: "Lucy", age: 29 },
];
const sum=people.filter((ele)=>(ele.age>30)).map(ele=>ele.age).reduce((x,v)=>x+v,0);
console.log(sum);