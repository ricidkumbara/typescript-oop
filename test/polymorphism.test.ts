describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {}
    }

    class Mananger extends Employee {

    }

    class VicePresident extends Mananger {

    }

    function sayHello(employee: Employee): void {
        console.log(`Hello ${employee.name}`);
        
    }

    it('should support', () => {
        let employee: Employee = new Employee('Ricid')
        console.log(employee);
        
        employee = new Mananger('Ricid')
        console.log(employee);

        employee = new VicePresident('Ricid')
        console.log(employee);
    })

    it('shoul support method polymorphism', () => {
        sayHello(new Employee('Ricid'))
        sayHello(new Employee('Kumbara'))
        sayHello(new Employee('Fulan'))
    })
})