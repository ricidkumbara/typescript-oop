describe('Visibility', () => {
    class Counter {
        // private counter: number = 0
        protected counter: number = 0

        public increment(): void {
            this.counter = this.counter + 1
        }
        
        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2
        }
    }

    it('should support', () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.log(counter.getCounter());      

        const doubleCounter = new DoubleCounter();
        doubleCounter.increment()
        doubleCounter.increment()
        doubleCounter.increment()
        console.log(doubleCounter.getCounter());
    })
})