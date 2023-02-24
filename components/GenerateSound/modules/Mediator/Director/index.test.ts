import Director from '.'

export class DummyDirector extends Director {
    createWidgets() { }
    widgetChanged() { }
}
let instance: DummyDirector


describe('Mediator Director (Abstract)', () => {
    beforeEach(() => {
        instance = new DummyDirector()
    })
    it('has a function createWidgets', () => {
        expect(typeof instance.createWidgets).toEqual('function')
    })
})
