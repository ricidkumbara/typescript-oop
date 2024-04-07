describe('Function Overriding', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello(name: string): void {
            console.log(`Hello ${name} my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        // sayHello(name: string): void {
        //     console.log(`Hello ${name} my name is ${this.name}, I am manager`);            
        // }

        // Using super method
        sayHello(name: string): void {
            super.sayHello(name)
            console.log('And i am your manager');
        }
    }

    it('should support', () => {
        const employee = new Employee('Ricid');
        employee.sayHello('Kumbara')

        const manager = new Manager('Ricid')
        manager.sayHello('Kumbara')
    })
})