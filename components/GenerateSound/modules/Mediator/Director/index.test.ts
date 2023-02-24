import Director from '.'

export class DirectorDummy extends Director {
    createWidgets() { }
    widgetChanged() { }
}
let instance: DirectorDummy


describe('Mediator Director (Abstract)', () => {
    beforeEach(() => {
        instance = new DirectorDummy()
    })
    it('has a function createWidgets', () => {
        expect(typeof instance.createWidgets).toEqual('function')
    })
})
