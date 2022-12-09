const HIGH_VOLUME = 0.2
const ZERO_VOLUME = 0
const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440
const PERIOD = 10

import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class Audio {
    gainNode: GainNode
    oscillatorNode: OscillatorNode
    context: AudioContext

    constructor() {
        this.context = new AudioContext()
        this.oscillatorNode = this.context.createOscillator()
        this.configOscillator()
        this.gainNode = this.context.createGain()
        this.oscillatorNode.connect(this.gainNode)
        this.gainNode.connect(this.context.destination)
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

    start() {
        this.gainNode.gain.setValueAtTime(HIGH_VOLUME, this.context.currentTime)
    }
    stop() {
        this.gainNode.gain.setValueAtTime(ZERO_VOLUME, this.context.currentTime)
    }
}