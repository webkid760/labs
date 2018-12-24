import "./index.css";
import "./button.scss";
import "./button.less";
// function add(a,b){
// 	return a+b;
// }

function add(a: number, b: number): number {
    return a + b;
}
let s = "hello" + " world";
console.log(s);
// ES6 的写法
let arr1 = [0, 1, 12345];
let arr2 = [3, 4, 5];
arr1.push(...arr2);

console.log(arr1);

console.log(add(1,3));
