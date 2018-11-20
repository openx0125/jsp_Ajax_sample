function Account(number, name, balance) {
    this.number = number;
    this.name = name;
    this.balance = balance;
}

var acct = new Account('123-456', 'Justin Lin', 1000);
console.log(acct.number, acct.name, acct.balance);

