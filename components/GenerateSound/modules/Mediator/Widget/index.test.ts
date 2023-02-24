import { DirectorDummy } from '../Director/index.test'
import Widget from '.'


class WidgetDummy extends Widget {
    changed() { }
}
let widgetDummy: WidgetDummy
let directorDummy: DirectorDummy

describe('Mediator Widget (Abstract)', () => {
    beforeEach(() => {
        directorDummy = new DirectorDummy()
        widgetDummy = new WidgetDummy(directorDummy)
    })
    it('has a function createWidgets', () => {
        expect(typeof widgetDummy.changed).toEqual('function')
    })
})
