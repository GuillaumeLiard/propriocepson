import ConcreteDirector from '.'

describe('Mediator Concrete Director', () => {
    it('instantiates an OscillatorWidget', () => {
        expect(() => new ConcreteDirector()).not.toThrow()
        // const instance = new ConcreteDirector()
        // expect(true).toEqual(true)
    })
})
