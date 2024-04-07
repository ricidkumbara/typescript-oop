describe('Properties', () => {
    class Customer {
        readonly id: number
        name: string = 'Guest'
        age?: number

        constructor(id: number, name: string) {
            this.id = id
            this.name = name
        }

        sayHello(name: string): string {
            return `Hello ${name}, my name is ${this.name}`
        }
    }

    it('shuold can have properties', () => {
        const customer = new Customer(1, 'Ricid')
        customer.age = 25

        console.log(customer)
    })

    it('should can have methods', () => {
        const customer = new Customer(1, 'Ricid')
        console.log(customer.sayHello('Kumbara'))
    })
})