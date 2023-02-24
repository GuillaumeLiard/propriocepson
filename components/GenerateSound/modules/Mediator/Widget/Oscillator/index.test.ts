import WidgetOscillator from '.'
import gsap from 'gsap'
import { DirectorConcrete } from '../../Director/index.test'

import { MockAudioContext } from '../../../Audio/audioContextSingleton/index.test'

jest.mock('gsap', () => ({
    timeline: () => ({
        add: jest.fn(),
        start: jest.fn(),
    }),
    to: jest.fn(),
}))
let widgetOscillator: WidgetOscillator
describe('Mediator Oscillator Widget', () => {
    beforeEach(() => {
        (global as any).AudioContext = MockAudioContext;
        const directorConcrete = new DirectorConcrete()
        widgetOscillator = new WidgetOscillator(directorConcrete)
    });
    describe('start()', () => {
        it('calls gsap.to function', () => {
            widgetOscillator.start()
            expect(gsap.to).toHaveBeenCalledTimes(1)
        })
    })
})
