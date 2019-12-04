let input = prompt("Enter what kind of PC do you want to buy: laptop or desktop?");

function setEachBackground(elements, color) {
    elements.forEach(el => {
        el.style.backgroundColor = color     
    })
}

let laptops = document.querySelectorAll(".latop-item");
let desktops = document.querySelectorAll(".desktop-item");

let items;
let color;

if(input == "laptop") {
    items = laptops;
    color = "lightgreen"
}
else if (input == "desktop") {
    items = desktops;
    color = "lightblue";
}
else {
    console.log('Incorrect input');
}

setEachBackground(items, color);

