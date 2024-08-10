let items = [250,645,300,900,50];

// let i = 0;

// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }

for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);


let foodItems = ["banana","mango","apple"];
let num = [43,45,55];
foodItems.push("chips","juice","orange");
console.log(foodItems);

let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted item is ",deletedItem);
console.log(foodItems.toString());
console.log(num);
console.log(num.toString());

let marvelHeroes = ["ironman","hulk",'spiderman'];
let dcHeroes = ["batman","superman"];
let pkHeroes = ["maulajatt"];

let heores = marvelHeroes.concat(dcHeroes,pkHeroes);
console.log(heores);

marvelHeroes.unshift("thor");
console.log(marvelHeroes);

marvelHeroes.shift();
console.log(marvelHeroes);

console.log(heores);
console.log(heores.slice(5,6));

let nume = [22,43,54,24,51,45];

// console.log(nume);
// nume.splice(3,3,22,33);

nume.splice(2,1,101);
console.log(nume);


let cmp = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

console.log("deleted company is",cmp.shift());
console.log(cmp);

cmp.splice(2,1,"Ola");

cmp.push("Amazon");




