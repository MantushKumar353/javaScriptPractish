const cart = [
    { name: "Shoes", price: 500, quantity: 1 },
    { name: "Shirt", price: 300, quantity: 3 },
    { name: "Pants", price: 800, quantity: 2 },
];
 function count(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].quantity>=2){
            count++;
        }
    }
    return count;
 }
 console.log(count(cart));