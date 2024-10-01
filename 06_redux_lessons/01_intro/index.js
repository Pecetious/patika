// let name = "can";
// let name2 = "pecete";

// name2 = "murat"
// console.log(name, name2);

/*referans tipli değişkenler bellekte aynı yerde tutulduğundan
 birbirine eşitlendiklerinde birindeki değişiklik diğerini de 
 değiştirir.
 */
// const user = {
//   name: "Can",
//   isActive: true,
// };
// const user2 = { ...user, name: "Pecete" };
// console.log(user, user2);

const numbers = [1, 2, 3, 4];
const numbers2 = [...numbers];
numbers2.push(5);
console.log(numbers, numbers2);
