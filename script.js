let coffee = 0;
let cpc = 1;
let cps = 0;
let coffeeCountElem = document.getElementById('coffee-count');
let cpcElem = document.getElementById('cpc');
let cpsElem = document.getElementById('cps');

const coffeeButton = document.getElementById('coffee-button');
const upgradeCpcBtn = document.querySelector('#upgrade-cpc button');
const upgradeCpsBtn = document.querySelector('#upgrade-cps button');
const shopDiamondBtn = document.querySelector('#shop-diamond button');

let cpcCost = 5;
let cpsCost = 10;
let diamondCost = 25;

coffeeButton.addEventListener('click', () => {
    coffee += cpc;
    updateDisplay();
});

upgradeCpcBtn.addEventListener('click', () => {
    if (coffee >= cpcCost) {
        coffee -= cpcCost;
        cpc += 1;
        cpcCost = Math.round(cpcCost * 1.1);
        upgradeCpcBtn.previousElementSibling.querySelector('span').innerText = cpcCost;
        updateDisplay();
    } else {
        alert("You don't have enough coffee!");
    }
});

upgradeCpsBtn.addEventListener('click', () => {
    if (coffee >= cpsCost) {
        coffee -= cpsCost;
        cps += 1;
        cpsCost = Math.round(cpsCost * 1.15);
        upgradeCpsBtn.previousElementSibling.querySelector('span').innerText = cpsCost;
        updateDisplay();
    } else {
        alert("You don't have enough coffee!");
    }
});

shopDiamondBtn.addEventListener('click', () => {
    if (coffee >= diamondCost) {
        coffee -= diamondCost;
        alert("You bought a Diamond Block!");
        updateDisplay();
    } else {
        alert("You don't have enough coffee!");
    }
});

function updateDisplay() {
    coffeeCountElem.innerText = coffee;
    cpcElem.innerText = cpc;
    cpsElem.innerText = cps;
}

setInterval(() => {
    coffee += cps;
    updateDisplay();
}, 1000);
