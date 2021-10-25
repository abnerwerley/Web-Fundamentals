// how to declare a variable:
// var name = "abner"; //ancient way to declare a variable
// let name2 = "Abner"; //if you want to declare a changeble variable
// const name3 = "Abner Werley"; // a "fix" variable

// variables declarations
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let nameIsOk = false;
let emailIsOk = false;
let subjectIsOk = false;
const map = document.querySelector("#map");

function nameValidation() {
  let txtName = document.querySelector("#txtName");
  if (name.value.length < 3) {
    txtName.innerHTML = "Invalid Name";
    txtName.style.color = "red";
  } else {
    txtName.innerHTML = "Valid Name";
    txtName.style.color = "green";
    nameIsOk = true;
  }
}

function emailValidation() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "Invalid Email";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "Valid Email";
    txtEmail.style.color = "green";
    emailIsOk = true;
  }
}

function subjectValidation() {
  let txtAssunto = document.querySelector("#txtSubject");

  if (subject.value.length >= 100) {
    txtAssunto.innerHTML =
      "The text is way too large, type a maximum of 100 characters.";
    txtSubject.style.color = "red";
    txtSubject.style.display = "block";
  } else {
    txtSubject.style.display = "none";
    subjectIsOk = true;
  }
}

function send() {
  if (nameIsOk == true && emailIsOk == true && subjectIsOk == true) {
    alert("Form sent successfully.");
  } else {
    alert("Fill the form correctly before sending it.");
  }
}

// function zoomMap() {
//   map.style.width = "600px";
//   map.style.height = "350px";
// }

// function normalMap() {
//   maa.style.width = "400px";
//   map.style.height = "250px";
// }

const texts = ["Abner Werley Silva"];
let count = 0;
let index = 0;
let currentText = "";
let letters = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 500);
})();
