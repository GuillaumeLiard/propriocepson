import { DirectorDummy } from '../Director/index.test'
import Widget from '.'


class DummyWidget extends Widget {
    changed() { }
}
let instance: DummyWidget
let directorInstance: DirectorDummy

describe('Mediator Widget (Abstract)', () => {
    beforeEach(() => {
        directorInstance = new DirectorDummy()
        instance = new DummyWidget(directorInstance)
    })
    it('has a function createWidgets', () => {
        expect(typeof instance.changed).toEqual('function')
    })
})
