const products = [
    { name: "Table", price: 200 },
    { name: "Chair", price: 150 },
    { name: "Couch", price: 800 },
    { name: "Bed", price: 1000 },
];

function expencive(arr){
    let temp=0;
    for(let i=0; i<arr.length; i++){
        if(temp<arr[i].price){
            temp=arr[i].price;
        }
    }
    return temp;
}
console.log(expencive(products));