"use strict";

let bill = 0;
let tipPercent = 0;
let persons = 0;
let tipPerson = 0;
let totalPerson = 0;

const billInput = document.querySelector(".input-bill");
const customInput = document.querySelector(".custom-input");
const zeroBill = document.querySelector(".zero-bill");
const peopleInput = document.querySelector(".input-person");
const zeroPeople = document.querySelector(".zero-people");
const buttons = document.querySelectorAll(".tip-button");
const tipOutput = document.querySelector(".tip-person");
const billOutput = document.querySelector(".total-person");
const reset = document.querySelector(".reset-btn");

function calculatePrices() {
  if (bill && persons && tipPercent) {
    let tip = (tipPercent / 100) * bill;
    tipPerson = tip / persons;
    let totalBill = bill + tip;
    totalPerson = totalBill / persons;
  } else {
    tipPerson = 0;
    totalPerson = 0;
  }
  reset.disabled = false;
  tipOutput.textContent = `$${tipPerson}`;
  billOutput.textContent = `$${totalPerson}`;
}

// For bill Input
billInput.addEventListener("input", () => {
  bill = Number(billInput.value);
  if (billInput.value != 0) {
    bill = Number(billInput.value);
    zeroBill.textContent = ``;
    //console.log(`The bill is: ${bill}`);
  } else {
    zeroBill.textContent = `Bill cannot be 0`;
  }
  calculatePrices();
});

// For Custom Input
customInput.addEventListener("input", () => {
  tipPercent = Number(customInput.value);
  if (customInput > 0) {
    tipPercent = Number(customInput.value);
    //console.log(tipPercent);
  }
  calculatePrices();
});

// For each tip button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (customInput.value.length == 0) {
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] == button) {
          buttons[i].classList.add("active");
          tipPercent = button.textContent.slice(0, -1);
        } else {
          buttons[i].classList.remove("active");
        }
      }
    } else {
      alert(`Custom Tip in use`);
    }
  });
  calculatePrices();
});

//For person Input
peopleInput.addEventListener("input", () => {
  persons = Number(peopleInput.value);
  if (peopleInput.value != 0) {
    zeroPeople.textContent = ``;
    persons = Number(peopleInput.value);
  } else {
    zeroPeople.textContent = `People cannot be 0`;
  }
  calculatePrices();
});

reset.addEventListener("click", () => {
  reset.disabled = true;
  bill = 0;
  tipPercent = 0;
  persons = 0;
  peopleInput.value = ``;
  billInput.value = ``;
  tipOutput.textContent = `$0`;
  billOutput.textContent = `$0`;
});
