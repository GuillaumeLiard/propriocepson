import Director from '.'

export class DirectorConcrete extends Director {
    createWidgets() { }
    widgetChanged() { }
}
let directorConcrete: DirectorConcrete


describe('Mediator Director (Abstract)', () => {
    beforeEach(() => {
        directorConcrete = new DirectorConcrete()
    })
    it('has a function createWidgets', () => {
        expect(typeof directorConcrete.createWidgets).toEqual('function')
    })
})
