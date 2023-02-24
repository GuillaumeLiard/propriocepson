import { DirectorConcrete } from '../Director/index.test'
import Widget from '.'


class WidgetConcrete extends Widget {
    changed() { }
}
let widgetConcrete: WidgetConcrete
let directorConcrete: DirectorConcrete

describe('Mediator Widget (Abstract)', () => {
    beforeEach(() => {
        directorConcrete = new DirectorConcrete()
        widgetConcrete = new WidgetConcrete(directorConcrete)
    })
    it('has a function createWidgets', () => {
        expect(typeof widgetConcrete.changed).toEqual('function')
    })
})
