import ITicketCalcultor from './ITicketCalculator';

export default class ParkingLot {
  parckedCars: { plate: string, checkingDate: Date }[];

  
  constructor(readonly capacity: number, readonly ticketCalculator: ITicketCalcultor){
    this.parckedCars = [];
  }


  checkin(plate: string , checkingDate: Date) : void {
    this.parckedCars.push({ plate, checkingDate })
  }

  checkout(plate: string ): void{
    const car = this.parckedCars.find(car => car.plate === plate);
    if( !car ) throw new Error('plate not found');
    const index = this.parckedCars.indexOf(car);
    this.parckedCars.splice(index, 1);
  }

  calculateTicket(plate: string , checkoutDate: Date): { price: number } {
    const car = this.parckedCars.find(car => car.plate === plate);
    if(!car) throw new Error('car not found');
    const price = this.ticketCalculator.calculate(car.checkingDate, checkoutDate);
    return { price };
  }

  getEmptySpaces(): number{
    return this.capacity - this.parckedCars.length
  }
}