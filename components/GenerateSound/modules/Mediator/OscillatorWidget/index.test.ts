import OscillatorWidget from '.'
import gsap from 'gsap'
import ConcreteDirector from '../ConcreteDirector'

import { MockAudioContext } from '../../Audio/audioContextSingleton/index.test'
const concreteDirector = new ConcreteDirector()
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
            const oscillatorWidget = new OscillatorWidget(concreteDirector)
            oscillatorWidget.start()
            expect(gsap.to).toHaveBeenCalledTimes(1)
        })
    })
})
