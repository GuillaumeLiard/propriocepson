import AudioContextSingleton from './audioContextSingleton'

const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440

import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class Oscillator {
    oscillatorNode: OscillatorNode
    context: AudioContext
    halfWaveDuration: number

    constructor(halfWaveDuration: number) {
        this.halfWaveDuration = halfWaveDuration
        this.context = AudioContextSingleton.getInstance()
        this.oscillatorNode = this.context.createOscillator()
        this.configOscillator()
    }

    getNode() {
        return this.oscillatorNode
    }

    configOscillator() {
        const { halfWaveDuration } = this
        this.oscillatorNode = this.context.createOscillator()
        this.oscillatorNode.type = "sine"
        this.oscillatorNode.start()
        const frequency = {
            value: LOW_FREQUENCY
        }
        const timeline = gsap.timeline({ repeat: -1, yoyo: true })
        const up = gsap.to(frequency, {
            value: HIGH_FREQUENCY,
            duration: halfWaveDuration,
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