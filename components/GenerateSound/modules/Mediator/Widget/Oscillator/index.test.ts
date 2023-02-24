import WidgetOscillator from '.'
import gsap from 'gsap'
import DirectorConcrete from '../../Director/Concrete'

import { MockAudioContext } from '../../../Audio/audioContextSingleton/index.test'

jest.mock('gsap', () => ({
    timeline: () => ({
        add: jest.fn(),
        start: jest.fn(),
    }),
    to: jest.fn(),
}))

describe('Mediator Oscillator Widget', () => {
    beforeEach(() => {
        (global as any).AudioContext = MockAudioContext;
    });
    describe('start()', () => {
        it('calls gsap.to function', () => {
            const directorConcrete = new DirectorConcrete()
            const widgetOscillator = new WidgetOscillator(directorConcrete)
            widgetOscillator.start()
            expect(gsap.to).toHaveBeenCalledTimes(2)
        })
    })
})
