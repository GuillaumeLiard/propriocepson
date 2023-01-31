import AudioContextSingleton from './audioContextSingleton'


const AUDIBLE_FREQUENCY = 440
const AUDIBLE_DURATION = 2

const NOT_AUDIBLE_FREQUENCY = 55
const NOT_AUDIBLE_DURATION = (2 * 60) - AUDIBLE_DURATION


import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class OscillatorLong {
    oscillatorNode: OscillatorNode
    context: AudioContext
    speed: number

    constructor(speed: number) {
        this.speed = speed
        this.context = AudioContextSingleton.getInstance()
        this.oscillatorNode = this.context.createOscillator()
        this.configOscillator()
    }

    getNode() {
        return this.oscillatorNode
    }

    configOscillator() {
        const { speed } = this
        this.oscillatorNode = this.context.createOscillator()
        this.oscillatorNode.type = "sine"
        this.oscillatorNode.start()
        const frequency = {
            value: NOT_AUDIBLE_FREQUENCY
        }
        const timeline = gsap.timeline({ repeat: -1 })
        const audible = gsap.fromTo(frequency, {
            value: AUDIBLE_FREQUENCY,
        }, {
            value: AUDIBLE_FREQUENCY,
            duration: AUDIBLE_DURATION / speed,
            ease: 'power1.inOut',
            onUpdate: () => {
                this.setFrequency(frequency.value)
            }
        })
        const notAudible = gsap.fromTo(frequency, {
            value: NOT_AUDIBLE_FREQUENCY,
        }, {
            value: NOT_AUDIBLE_FREQUENCY,
            duration: NOT_AUDIBLE_DURATION / speed,
            ease: 'power1.inOut',
            onUpdate: () => {
                this.setFrequency(frequency.value)
            }
        })
        timeline.add(audible)
        timeline.add(notAudible)
    }

    setFrequency(frequencyInHertz: number) {
        this.oscillatorNode.frequency.setValueAtTime(frequencyInHertz, this.context.currentTime); // value in hertz
    }

}