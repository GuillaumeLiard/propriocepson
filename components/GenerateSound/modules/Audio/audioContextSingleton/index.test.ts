import AudioContextSingleton from '.'

const mockcreateOscillator = jest.fn().mockImplementation(() => ({
    type: jest.fn(),
    start: jest.fn(),
}))

export const MockAudioContext = jest.fn(() => {
    return {
        // https://javascript-haskell-purescript-mars.hashnode.dev/mocking-the-web-audio-api-in-jest
        // createAnalyser: mockcreateAnalyser,
        // createMediaElementSource: mockcreateMediaElementSource,
        createOscillator: mockcreateOscillator,
        // createChannelSplitter: mockcreateChannelSplitter,
    }
});
describe('audioContextSingleton', () => {
    beforeEach(() => {
        (global as any).AudioContext = MockAudioContext;
    });
    it('returns the same AudioContext instance when called twice', () => {
        const firstInstance = AudioContextSingleton.getInstance()
        const secondInstance = AudioContextSingleton.getInstance()
        expect(firstInstance === secondInstance).toEqual(true)
    })
})