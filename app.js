class Bank {
	constructor(name, balance){
		this.name = name;
		this.balance = balance;
	}
	deposit(){
		console.log(`${this.name} want to deposit.`)

	}
	withdraw(){
		console.log(`${this.name} want to withdraw.`)
	}
	getBalance(){
		console.log(`The balance for ${this.name} is ${this.balance} kr.`)
	}

}
const bank1 = new Bank ("Anna", 10000);
console.log(bank1);
bank1.deposit();
bank1.withdraw();
bank1.getBalance();
