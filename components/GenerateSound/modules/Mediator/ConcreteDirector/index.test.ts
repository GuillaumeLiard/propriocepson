import ConcreteDirector from '.'
import { MockAudioContext } from '../../Audio/audioContextSingleton/index.test'
import gsap from 'gsap'
jest.mock('gsap', () => ({
    timeline: () => ({
        add: jest.fn(),
        start: jest.fn(),
    }),
    to: jest.fn(),
}))

describe('Mediator Concrete Director', () => {
    beforeEach(() => {
        (global as any).AudioContext = MockAudioContext;
    });
    it('instantiates an OscillatorWidget', () => {
        expect(() => new ConcreteDirector()).not.toThrow()
        // const instance = new ConcreteDirector()
        // expect(true).toEqual(true)
    })
})
