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

        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.log(`Hello VP ${vp.name}`);
        } else if (employee instanceof Mananger) {
            const manager = employee as VicePresident;
            console.log(`Hello Manager ${manager.name}`);
        } else {
            console.log(`Hello Employee ${employee.name}`);
        }
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
        sayHello(new Mananger('Kumbara'))
        sayHello(new VicePresident('Fulan'))
    })
})