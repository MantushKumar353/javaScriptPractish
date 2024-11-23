const items = [
    { name: "Book", price: 100 },
    { name: "Pen", price: 20 },
    { name: "Pencil", price: 10 },
];

function increse(arr){
    let arr2=[];
    for(let i=0; i<arr.length; i++){
        arr2[i]=arr[i].price*(110/100);
    }
    return arr2;
}
console.log(increse(items));