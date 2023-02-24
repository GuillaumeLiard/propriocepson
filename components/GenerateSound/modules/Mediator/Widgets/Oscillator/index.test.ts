import OscillatorWidget from '.'
import gsap from 'gsap'
import ConcreteDirector from '../../Director/Concrete'

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
            const concreteDirector = new ConcreteDirector()
            const oscillatorWidget = new OscillatorWidget(concreteDirector)
            oscillatorWidget.start()
            expect(gsap.to).toHaveBeenCalledTimes(2)
        })
    })
})
