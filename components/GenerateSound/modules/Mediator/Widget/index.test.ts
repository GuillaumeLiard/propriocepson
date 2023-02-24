import { DirectorDummy } from '../Director/index.test'
import Widget from '.'


class DummyWidget extends Widget {
    changed() { }
}
let widgetDummy: DummyWidget
let directorDummy: DirectorDummy

describe('Mediator Widget (Abstract)', () => {
    beforeEach(() => {
        directorDummy = new DirectorDummy()
        widgetDummy = new DummyWidget(directorDummy)
    })
    it('has a function createWidgets', () => {
        expect(typeof widgetDummy.changed).toEqual('function')
    })
})
