import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);

    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const allCars = await carODM.findAll();

    return allCars.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);

    return this.createCarDomain(car);
  }

  public async update(id: string, car: ICar) {
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);

    return this.createCarDomain(updatedCar);
  }
}

export default CarService;