const textE = document.getElementById("text");
const speedE = document.getElementById("speed");
const text = 'We Love Programming! QAQ';
let index = 1;
let speed = 300 / speedE.value;
showText()

function showText() {
    textE.innerText = text.slice(0, index);
    index ++;
    if(index > text.length) {
        index = 1;
    }
    setTimeout(showText, speed);
}

speedE.addEventListener('input', (i) => speed = 300 / i.target.value);