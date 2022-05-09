import ITicketCalcultor from './ITicketCalculator';

export default class BeachTicketCalcultor implements ITicketCalcultor {

  calculate(checkinDate: Date, checkoutDate: Date): number {
    return 20
  }

  
}