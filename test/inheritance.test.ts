describe('Inheritance', () => {
    class Employee {
        name: string

        constructor(name: string) {
            this.name = name
        }
    }

    class Manager extends Employee {}

    class Director extends Manager {}

    it('should support in typescript', () => {
        const employee = new Employee('Ricid')
        console.log(employee);

        const manager = new Manager('Kumbara')
        console.log(manager);
        
        const director = new Director('Fulan')
        console.log(director);
    })

})