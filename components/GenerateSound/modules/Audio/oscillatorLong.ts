const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440
const PERIOD = 5

import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class OscillatorLong {
    oscillatorNode: OscillatorNode
    context: AudioContext

    constructor(context: AudioContext) {
        this.context = context
        this.oscillatorNode = context.createOscillator()
        this.configOscillator()
    }

    getNode() {
        return this.oscillatorNode
    }

    configOscillator() {
        this.oscillatorNode = this.context.createOscillator()
        this.oscillatorNode.type = "sine"
        this.oscillatorNode.start()
        const frequency = {
            value: LOW_FREQUENCY
        }
        const timeline = gsap.timeline({ repeat: -1, yoyo: true })
        const up = gsap.to(frequency, {
            value: HIGH_FREQUENCY,
            duration: PERIOD / 2,
            ease: 'power1.inOut',
            onUpdate: () => {
                this.setFrequency(frequency.value)
            }
        })
        timeline.add(up)
    }

    setFrequency(frequencyInHertz: number) {
        this.oscillatorNode.frequency.setValueAtTime(frequencyInHertz, this.context.currentTime); // value in hertz
    }

}