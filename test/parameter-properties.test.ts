describe('Parameter Properties', () => {
    class Person {
        constructor(public name: string = "") {}
    }

    class Car {
        constructor(public brand: string) {}
    }

    it('should support', () => {
        const person = new Person()
        person.name = 'Ricid'
        console.log(person.name);

        const car = new Car('Honda')
        console.log(car.brand);

        car.brand = 'Toyota'
        console.log(car.brand);
        
    })
})