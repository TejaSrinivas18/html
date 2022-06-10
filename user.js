let nameEl = document.createElement("p");
nameEl.textContent = "NAME";
document.body.appendChild(nameEl);

let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "nameInput";
document.body.appendChild(nameInput);

let doorEl = document.createElement("p");
doorEl.textContent = "DOOR NO";
document.body.appendChild(doorEl);

let doorInput = document.createElement("input");
doorInput.type = "text";
doorInput.id = "doorInput";
document.body.appendChild(doorInput);

let addressEl = document.createElement("p");
addressEl.textContent = "ADDRESS";
document.body.appendChild(addressEl);

let addressInput = document.createElement("input");
addressInput.type = "text";
addressInput.id = "addressInput";
document.body.appendChild(addressInput);

let breakEl = document.createElement("br");
document.body.appendChild(breakEl);

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "check";
document.body.appendChild(checkBoxEl);


let nameEl2 = document.createElement("p");
nameEl2.textContent = "NAME";
document.body.appendChild(nameEl2);

let nameInput2 = document.createElement("input");
nameInput2.type = "text";
nameInput2.id = "nameInput2";
document.body.appendChild(nameInput2);

let doorEl2 = document.createElement("p");
doorEl2.textContent = "DOOR NO";
document.body.appendChild(doorEl2);

let doorInput2 = document.createElement("input");
doorInput2.type = "text";
doorInput2.id = "doorInput2";
document.body.appendChild(doorInput2);

let addressEl2 = document.createElement("p");
addressEl2.textContent = "ADDRESS";
document.body.appendChild(addressEl2);

let addressInput2 = document.createElement("input");
addressInput2.type = "text";
addressInput.id = "addressInput2";
document.body.appendChild(addressInput2);

checkBoxEl.onclick = function() {
    if (checkBoxEl.checked === true) {
        let name = nameInput.value;
        nameInput2.value = name;
        let doorNo = doorInput.value;
        doorInput2.value = doorNo;
        let address = addressEl.value;
        addressInput2.value = address;
    } else {
        nameInput2.value = "";
        doorInput2.value = "";
        addressInput2.value = "";
    }
}