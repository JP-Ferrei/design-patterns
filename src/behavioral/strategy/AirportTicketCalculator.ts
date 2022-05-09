import ITicketCalcultor from './ITicketCalculator';

export default class AirportTicketCalculato implements ITicketCalcultor {

  calculate(checkinDate: Date, checkoutDate: Date): number {
    const period = (checkoutDate.getTime() - checkinDate.getTime())/(1000*60*60);
    return period * 10;
  }
  

};
