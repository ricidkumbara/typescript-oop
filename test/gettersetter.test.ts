describe('Getter Setter', () => {
    class Category {
        _name?: string

        get name(): string {
            if (this._name) {
                return this._name
            } else {
                return 'Empty'
            }
        }

        set name(value: string) {
            if (value) {
                this._name = value
            }
        }
    }

    it('should support in class', () => {
        const category = new Category()
        console.log(category.name)
        
        category.name = 'Food'
        console.log(category.name)
        
        category.name = ''
        console.log(category.name)
    })
})