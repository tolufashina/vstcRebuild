// let inputObj = {
//   name: "",
//   mail: "",
//   number: "",
//   subj: "",
// };
// let validation = false;
// let messageText = document.querySelector("TextArea");
// let inputfields = document.querySelectorAll("input");
// let inputArray = Array.from(inputfields);

// let [firstname, email, phone_Num, subject] = inputArray;
// function inputValidations() {
//   firstname.addEventListener("change", (e) => {
//     if (isNaN(firstname.value)) {
//       inputObj.name = firstname.value;
//       validation = true;
//       console.log(inputObj.name);
//     } else {
//       errors("this is a number");
//       firstname.addEventListener("click", (e) => {
//         e.preventDefault();
//         errors("");
//       });
//     }
//   });

//   email.addEventListener("change", (e) => {
//     if (validateEmail() && email.value.toLowerCase()) {
//       inputArray.mail = email.value;
//     }else{
//         errors('this is an email')
//     }
//   });

//   reset();
// }

// function errors(value) {
//   document.querySelector(".help-block").textContent = value;
// }

// function reset() {
//   firstname.value = "";
//   email.value = "";
//   subject.value = "";
//   phone_Num.value = "";
// }

// function validateEmail() {
//   let pattern =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
//   pattern.test(email.value);
// }

// validateEmail();
// inputValidations();
