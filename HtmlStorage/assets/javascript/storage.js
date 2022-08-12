function saveData() {
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  //setItem() method;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  //getItem() method;
  localStorage.getItem(name);
  localStorage.getItem(email);
  localStorage.getItem(password);
}
//reset the data;
function resetData() {
  //reset() method;
  localStorage.clear("name", name);
  localStorage.clear("email", email);
  localStorage.clear("password", password);
}

// //session storage
// function saveData() {
//   let file;
//   file = document.getElementById("file").value;
//   //setItem() method;
//   sessionStorage.setItem("file", file);
//   sessionStorage.getItem("file", file);
// }
