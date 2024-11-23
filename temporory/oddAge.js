const people = [
    { name: "Tom", age: 25 },
    { name: "Jerry", age: 22 },
    { name: "Spike", age: 35 },
];

const sum=people.filter(lel=>lel.age%2!=0).map(ele=>ele.name);
console.log(sum);
