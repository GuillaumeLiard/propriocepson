import MainDirector from '.'
import { MockAudioContext } from '../../../Audio/audioContextSingleton/index.test'
import gsap from 'gsap'
jest.mock('gsap', () => ({
    timeline: () => ({
        add: jest.fn(),
        start: jest.fn(),
    }),
    to: jest.fn(),
}))

describe('Mediator Main Director', () => {
    beforeEach(() => {
        (global as any).AudioContext = MockAudioContext;
    });
    it('instantiates an OscillatorWidget', () => {
        expect(() => new MainDirector()).not.toThrow()
        // const instance = new MainDirector()
        // expect(true).toEqual(true)
    })
})
