let headingEl = document.createElement("h1");
headingEl.textContent = 0;
headingEl.classList.add("bg-color");
document.body.appendChild(headingEl);

let header = document.createElement("h1");
header.textContent = "OK";
document.body.appendChild(header);

let incrementEl = document.createElement("button");
incrementEl.textContent = "increment";
document.body.appendChild(incrementEl);

let decrementEl = document.createElement("button");
decrementEl.textContent = "decrement";
decrementEl.classList.add("decrement");
document.body.appendChild(decrementEl);

incrementEl.onclick = function() {
    let counterValue = headingEl.textContent;
    let updatedValue = parseInt(counterValue) + 1;
    headingEl.textContent = updatedValue;
    if (updatedValue > 0) {
        headingEl.style.backgroundColor = "green";
        header.textContent = "GOOD";
    } else if (updatedValue < 0) {
        headingEl.style.backgroundColor = "red";
        header.textContent = "DANGER";
    } else {
        headingEl.style.backgroundColor = "yellow";
        header.textContent = "OK";
    }
}

decrementEl.onclick = function() {
    let counterValue = headingEl.textContent;
    let updatedValue = parseInt(counterValue) - 1;
    headingEl.textContent = updatedValue;
    if (updatedValue > 0) {
        headingEl.style.backgroundColor = "green";
        header.textContent = "GOOD";
    } else if (updatedValue < 0) {
        headingEl.style.backgroundColor = "red";
        header.textContent = "DANGER";
    } else {
        headingEl.style.backgroundColor = "yellow";
        header.textContent = "OK";
    }
}