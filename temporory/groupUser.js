
const users = [
    { name: "Alice", gender: "Female" },
    { name: "Bob", gender: "Male" },
    { name: "Cathy", gender: "Female" },
    { name: "Dan", gender: "Male" },
];


function countMale(arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].gender=="Male"){
            count++;
        }
    }
    return count;
}
console.log(countMale(users));
function countfale(arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].gender=="Female"){
            count++;
        }
    }
    return count;
}
console.log(countfale(users));