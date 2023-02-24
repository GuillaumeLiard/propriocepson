import WidgetOscillator from '.'
import gsap from 'gsap'
import DirectorMain from '../../Director/Main'

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
            const directorMain = new DirectorMain()
            const widgetOscillator = new WidgetOscillator(directorMain)
            widgetOscillator.start()
            expect(gsap.to).toHaveBeenCalledTimes(2)
        })
    })
})
