class BankAccount {
  constructor(owner, balance, accountType, phoneNumber) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = accountType;
    this.phoneNumber = phoneNumber;
  }

  deposit(amount) {
    if(amount < 0){
      alert('You should deposit a positive amount')
      return
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if(amount > this.balance){
      alert('Insufficient Balance')
      return
    }      
    this.balance -= amount;
  }
}

// retrieve the person object from local storage
const personString = localStorage.getItem("person");
const person = JSON.parse(personString);
const account = new BankAccount(person.name,0,'Savings',"70528539")
console.log(account)
// use the information to display the bank account page
document.getElementById("owner").innerHTML = account.owner;
document.getElementById("balance").innerHTML = account.balance;
document.getElementById("account-type").innerHTML = account.accountType;
document.getElementById("phone-number").innerHTML = account.phoneNumber;


document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = parseInt(
      document.getElementById("deposit-amount").value
    );
    account.deposit(depositAmount);
    document.getElementById("balance").innerHTML = account.balance;
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    account.withdraw(withdrawAmount);
    document.getElementById("balance").innerHTML = account.balance;
  });
