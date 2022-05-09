export default class Account {
  private balance: number;

	constructor(readonly number: string) {
    this.balance = 0;
	}
  
  credit(amount: number)  {
    this.balance += amount;
  }
  
  debit (amount: number) {
    this.balance -= amount;
  }
  
  getBalance(): number {
    return this.balance;
  }
  
};
