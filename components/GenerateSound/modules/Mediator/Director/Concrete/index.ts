import Director from '..'
import OscillatorWidget from '../../Widget/Oscillator'

export default class ConcreteDirector extends Director {
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