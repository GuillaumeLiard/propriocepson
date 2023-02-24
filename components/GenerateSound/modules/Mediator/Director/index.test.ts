import Director from '.'

export class DirectorDummy extends Director {
    createWidgets() { }
    widgetChanged() { }
}
let directorDummy: DirectorDummy


describe('Mediator Director (Abstract)', () => {
    beforeEach(() => {
        directorDummy = new DirectorDummy()
    })
    it('has a function createWidgets', () => {
        expect(typeof directorDummy.createWidgets).toEqual('function')
    })
})
