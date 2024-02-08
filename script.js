// 1
// Создайте массив из 10 элементов и удалите из него первые 3 элемента.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("1:",arr1);
arr1.splice(0, 3);
console.log(arr1);
// 2
// Создайте массив из 7 элементов и замените каждый элемент на строку “hello”.
let arr2 = new Array(7).fill(" ");
console.log("2:",arr2);
for(let i = 0; i < arr2.length; i++){
  arr2[i] = "hello";
}
console.log(arr2);
// 3
// Создайте массив из 6 элементов и отсортируйте его в обратном порядке.
let arr3 = [1, 2, 3, 4, 5, 6];
console.log("3:",arr3);
arr3.sort((a, b) => b - a);
console.log(arr3);
// 4
// Создайте массив из 4 элементов и найдите индекс элемента, который равен 3.
let arr4 = [1, 2, 3, 4];
console.log("4:" , arr4);
let i = arr4.indexOf(3);
console.log(i);
// 5
// Создайте массив из 8 элементов и удалите из него все элементы, кроме первых двух.
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("5:",arr5);
arr5.splice(2, 6);
console.log(arr5);
// 6
// Создайте массив из 9 элементов и добавьте в него элемент “world” на позицию 3.
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("6:",arr6);
arr6.splice(2, 0, "world");
console.log(arr6);
// 7
// Создайте массив из 12 элементов и найдите сумму всех элементов.
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("7:",arr7);
let summ = 0;
for(let i = 0; i < arr7.length; i++){
  summ+= arr7[i];
}
console.log(summ);
// 8
// Создайте массив из 11 элементов и найдите среднее арифметическое всех элементов.
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("8:",arr8);
let average = 0;
for(let i = 0; i < arr8.length; i++){
  summ+= arr8[i];
}
average = average/arr8.length
console.log(average);
// 9
// Создайте массив из 6 элементов и найдите максимальный элемент.
let arr9 = [3, 4, 2, 8, 1, 5];
console.log("9:",arr9);
let max = 0;
for(let i = 0; i < arr9.length; i++){
  if(arr9[i] > max){
    max = arr9[i];
  }
}
console.log(max);
// 10
// Создайте массив из 5 элементов и найдите минимальный элемент.
let arr10 = [3, 4, 2, 8, 1];
console.log("10:",arr10);
let min = 999;
for(let i = 0; i < arr10.length; i++){
  if(arr10[i] < min){
    min = arr10[i];
  }
}
console.log(min);
// 11
// Создайте массив из 7 элементов и найдите количество элементов, которые больше 5.
let arr11 = [3, 4, 2, 8, 1, 5, 6];
console.log("11:",arr11);
let qua11 = 0;
for(let i = 0; i < arr11.length; i++){
  if(arr11[i] > 5){
    qua11++;
  }
}
console.log(qua11);
// 12
// Создайте массив из 10 элементов и найдите количество элементов, которые меньше 10.
let arr12 = [31, 4, 12, 18, 1, 45, 6, 17, 81, 0];
console.log("12:",arr12);
let qua12 = 0;
for(let i = 0; i < arr12.length; i++){
  if(arr12[i] < 10){
    qua12++;
  }
}
console.log(qua12);
// 13
// Создайте массив из 8 элементов и объедините его с другим массивом из 4 элементов.
let arr13_1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("13_1:",arr13_1);
let arr13_2 = [9, 10, 11, 12];
console.log("13_2:",arr13_2);
let arr13_3 = arr13_1.concat(arr13_2);
console.log("13_3:",arr13_3);
// 14
// Создайте массив из 6 элементов и отфильтруйте его, оставив только элементы, которые больше 3.
let arr14_1 = [1, 4, 2, 5, 3, 6];
console.log("14_1:" ,arr14_1)
let arr14_2 = arr14_1.filter(element => element > 3);
console.log("14_2:",arr14_2);
