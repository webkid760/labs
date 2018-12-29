import "./index.css";

// function add(a,b){
// 	return a+b;
// }
// ES6 的写法
let arr1 = [0, 1, 12345];
let arr2 = [3, 4, 5];
arr1.push(...arr2);

console.log(arr1);
class MyElement extends HTMLElement {
    get content() {
        return this.getAttribute('content');
    }

    set content(val) {
        this.setAttribute('content', val);
    }
}

window.customElements.define('my-element', MyElement);

function customTag(tagName, fn) {
    Array
        .from(document.getElementsByTagName(tagName))
        .forEach(fn);
}

function myElementHandler(element) {
    element.textContent = element.content;
}

customTag('my-element', myElementHandler);
