import OscillatorWidget from '.'
import gsap from 'gsap'
import ConcreteDirector from '../ConcreteDirector'
const concreteDirector = new ConcreteDirector()
jest.mock('gsap')
describe('Mediator Oscillator Widget', () => {

    describe('start()', () => {
        it('calls gsap.to function', () => {
            const oscillatorWidget = new OscillatorWidget(concreteDirector)
            oscillatorWidget.start()
            expect(gsap.to).toHaveBeenCalledTimes(1)
        })
    })
})
