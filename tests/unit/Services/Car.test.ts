import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testa a camada CarService', function () {
  it('Deve cadastrar um carro com sucesso', async function () {
    // Arrange
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: Car = new Car({
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });
    Sinon.stub(Model, 'create').resolves(carOutput);

    // Arrange
    const carService = new CarService();
    const result = await carService.create(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deve listar todos os carros com sucesso', async function () {
    // Arrange
    const allCars: ICar[] = [{
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    },
    {
      id: '634852326b35b59438fbea31',
      model: 'Tempra',
      year: 1995,
      color: 'Black',
      status: false,
      buyValue: 39,
      doorsQty: 2,
      seatsQty: 5,
    }];
    Sinon.stub(Model, 'find').resolves(allCars);

    // Arrange
    const carService = new CarService();
    const result = await carService.findAll();

    // Assert
    expect(result).to.be.deep.equal(allCars);
  });

  it('Deve listar um carro com sucesso, com base no id informado', async function () {
    // Arrange
    const car: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    Sinon.stub(Model, 'findById').resolves(car);

    // Arrange
    const carService = new CarService();
    const result = await carService.findById('634852326b35b59438fbea2f');

    // Assert
    expect(result).to.be.deep.equal(car);
  });

  it('Deve atualizar um carro com sucesso, com base no id informado', async function () {
    // Arrange
    const car: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(car);

    // Arrange
    const carService = new CarService();
    const result = await carService.update('634852326b35b59438fbea2f', car);

    // Assert
    expect(result).to.be.deep.equal(car);
  });

  before(function () { Sinon.restore(); });
});