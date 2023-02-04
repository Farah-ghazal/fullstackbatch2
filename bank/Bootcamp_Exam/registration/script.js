class Person {
  constructor(name, email, password, phone) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }
}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  if (!name || !email || !password || !phone) {
    return;
  } else {
    const person = new Person(name, email, password, phone);
    localStorage.setItem("person", JSON.stringify(person));
    window.location.href = "/bank/index.html";
  }
});
