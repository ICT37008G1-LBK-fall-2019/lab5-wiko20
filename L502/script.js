function isEmpty(el) {
    if(el.childNodes.length > 1) 
        return "Element isn't empty"
    return "Element is empty"
}

let users = document.querySelector('#users');
let list = document.querySelector('#empty-list'); 

console.log(isEmpty(users));
console.log(isEmpty(list));

