const HIGH_VOLUME = 0.1
const ZERO_VOLUME = 0
const LOW_FREQUENCY = 100
const HIGH_FREQUENCY = 440
const PERIOD = 10

import gsap from 'gsap'

export default class SingletonAudio {
    private static instance: SingletonAudio;
    gainNode: GainNode
    oscillatorNode: OscillatorNode
    context: AudioContext

    private constructor() {
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
            onUpdate: () => {
                this.setFrequency(frequency.value)
            }
        })
        timeline.add(up)
    }

    public static getInstance(): SingletonAudio {
        if (!SingletonAudio.instance) {
            SingletonAudio.instance = new SingletonAudio();
        }

        return SingletonAudio.instance;
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