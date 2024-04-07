describe('Instance of', () => {
    class Employee {}
    class Manager {}

    const ricid = new Employee()
    const kumbara = new Manager()

    it('Should have problem using typeof', () => {
        console.log(typeof ricid);
        console.log(typeof kumbara);
    })

    it('should support using instanceof', () => {
        expect(ricid instanceof Employee).toBe(true)
        expect(ricid instanceof Manager).toBe(false)

        expect(kumbara instanceof Employee).toBe(false)
        expect(kumbara instanceof Manager).toBe(true)
    })
})