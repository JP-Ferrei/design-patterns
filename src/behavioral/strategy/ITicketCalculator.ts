export default interface ITicketCalcultor {

  calculate(checkinDate: Date, checkoutDate: Date): number;
}