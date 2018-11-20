function Account(number, name, balance) {
    Object.defineProperties(this, {
        'number' : {
            get        : function(){ return number; },
            enumerable : true
        },
        'name' : {
            get        : function(){ return name; },
            enumerable : true
        },
        'balance' : {
            get        : function(){ return balance; },
            enumerable : true
        },
    });

    this.deposit = function(money) {
        if(money < 0) {
            throw Error('money cannot be negative');
        }
        balance += money;
    }    
}

var acct = new Account('123-456', 'Justin Lin', 1000);
console.log(acct.number, acct.name, acct.balance);

acct.balance = 10000;
console.log(acct.number, acct.name, acct.balance);

acct.deposit(10000);
console.log(acct.number, acct.name, acct.balance);

