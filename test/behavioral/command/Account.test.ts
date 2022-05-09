import Account from '../../../src/behavioral/command/Account'
import CreditCommand from '../../../src/behavioral/command/CreditCommand';
import DebitCommand from '../../../src/behavioral/command/DebitCommand';

test("Deve criar uma conta bancária", function () {
	const account = new Account("0011239");
	const balance = account.getBalance();
	expect(balance).toBe(0);
});

test("Deve creditar uma conta bancária", function () {
	const account = new Account("0011239");
	account.credit(100);
	const balance = account.getBalance();
	expect(balance).toBe(100);
});

test("Deve debitar uma conta bancária", function () {
	const account = new Account("0011239");
	account.credit(100);
	account.debit(50);
	const balance = account.getBalance();
	expect(balance).toBe(50);
});

test('should credit a account through command', () => {
  const account = new Account('2342');
  const creditAccount = new CreditCommand(account, 100);
  creditAccount.execute();
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test('should credit a account through command', () => {
  const account = new Account('2342');
  const creditAccount = new CreditCommand(account, 100);
  creditAccount.execute();
  const debitCommand = new DebitCommand(account, 50);
  debitCommand.execute();
  const balance = account.getBalance();
  expect(balance).toBe(50);
});
