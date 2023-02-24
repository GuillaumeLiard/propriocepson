import AbstractDirector from '..'
import OscillatorWidget from '../../Widget/Oscillator'

export default class ConcreteDirector extends AbstractDirector {
    oscillatorWidget: OscillatorWidget

    constructor() {
        super()
        this.oscillatorWidget = new OscillatorWidget(this)
        this.createWidgets()
    }
    createWidgets(): void {
        this.oscillatorWidget.start()
    }

    widgetChanged(): void {
        console.log('widgetChanged')
    }
}