import Director from '.'

export class DummyDirector extends Director { }
let instance: DummyDirector


describe('Mediator Abstrat Director', () => {
    beforeEach(() => {
        instance = new DummyDirector()
    })
    it('has a function createWidgets', () => {
        expect(typeof instance.createWidgets).toEqual('function')
    })
})
