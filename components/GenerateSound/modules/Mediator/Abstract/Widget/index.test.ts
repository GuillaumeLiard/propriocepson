import { DummyDirector } from '../../Director/index.test'
import Widget from '.'


class DummyWidget extends Widget {
    changed() { }
}
let instance: DummyWidget
let directorInstance: DummyDirector

describe('Mediator Abstrat Widget', () => {
    beforeEach(() => {
        directorInstance = new DummyDirector()
        instance = new DummyWidget(directorInstance)
    })
    it('has a function createWidgets', () => {
        expect(typeof instance.changed).toEqual('function')
    })
})
