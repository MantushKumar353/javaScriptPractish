const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 50, inStock: false },
    { name: "Keyboard", price: 70, inStock: true },
    { name: "Monitor", price: 300, inStock: false },
];
 function count(arr){
    let count=0;
      for(i=0; i<arr.length; i++){
        if(arr[i].inStock==true){
            count++;
        }
      }
    return count;
}
const count2=products.filter(ele=>ele.inStock==true).map(lee=>lee.inStock);
console.log(count2);
console.log(count(products));