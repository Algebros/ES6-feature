import Cart from './components/cart';

let cart = new Cart();
console.log(cart)
document.querySelector('body').append(cart.render())

// let arr = [1, 2, 3, [4, 5, 6, {a: 7, b: 8, c: 9}], 10];

// function spread(arr) {
//   let newArr = [];

//   for (const key in arr) {
//     if(typeof arr[key] !== 'object') {
//       newArr.push(arr[key]);
//     } else {
//       let includeArr = spread(arr[key]);
//       for (const key in includeArr) {
//         newArr.push(includeArr[key]);
//       }
//     }
//   }

//   return newArr;
// }

// console.log(spread(arr));

// let obj = {
//   a: 1, 
//   b: 2,
//   c: {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: {
//       a: 1,
//       b: 2,
//       c: 3,
//     },
//   },
//   d: 4,
// }

// function createList(obj) {
//   let ul = document.createElement('ul');
//     for (const key in obj) {
//       let li = document.createElement('li');

//       if(typeof obj[key] !== 'object') {
//         li.append(`${key}: ${obj[key]}`);
//       } else {
//         let newUl = createList(obj[key]);
//         li.append(newUl);
//       }

//       ul.append(li);
//     }

//   return ul;
// }


// document.querySelector('body').append(createList(obj));