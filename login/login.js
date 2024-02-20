"use strict";
const box1 = document.querySelector(".radio_1");
const box2 = document.querySelector(".radio_2");
const radio1 = document.querySelector(".ra_1");
const radio2 = document.querySelector(".ra_2");
const chooseBtn = document.querySelector(".choose_btn");
box1.addEventListener("click", function (e) {
  e.preventDefault();
  radio1.checked = true;
  radio2.checked = false;
  chooseBtn.textContent="Join as a Client";
  chooseBtn.style.backgroundColor="#108a00";
  chooseBtn.style.borderColor="#108a00";
//   chooseBtn.style.Color="#ffffff";
   
});
box2.addEventListener("click", function (e) {
  e.preventDefault();
  radio2.checked = true;
  radio1.checked = false;
  chooseBtn.textContent="Apply as a technician";
  chooseBtn.style.backgroundColor="#108a00";
  chooseBtn.style.borderColor="#108a00";
});
