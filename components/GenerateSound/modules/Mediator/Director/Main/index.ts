import Director from '..'
import WidgetOscillator from '../../Widget/Oscillator'

export default class MainDirector extends Director {
    widgetOscillator: WidgetOscillator

    constructor() {
        super()
        this.widgetOscillator = new WidgetOscillator(this)
        this.createWidgets()
    }
    createWidgets(): void {
        this.widgetOscillator.start()
    }

    widgetChanged(): void {
        console.log('widgetChanged')
    }
}