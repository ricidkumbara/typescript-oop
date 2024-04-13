describe('Static', () => {
    class Configuration {
        static NAME: string = 'Belajar Typescript OOP';
        static VERSION: number = 1.0;
        static AUTHOR: string = 'Ricid Kumbara';
    }

    class MathUtil {
        static sum(...values: number[]): number {
            let total = 0;

            for (const value of values) {
                total += value;
            }

            return total;
        }
    }

    it('should support static property', () => {
        console.log(Configuration.NAME);
        console.log(Configuration.VERSION);
        console.log(Configuration.AUTHOR);
    })

    it('should support static method', () => {
        console.log(MathUtil.sum(1,2,3));
    })
})

