const students = [
    { name: "A", marks: 45 },
    { name: "B", marks: 35 },
    { name: "C", marks: 50 },
];


function count(arr){
    let arr2=[];
    let k=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].marks>=40){
            arr2[k++]=arr[i].name;
        }
    }
    return arr2;
}
console.log(count(students));