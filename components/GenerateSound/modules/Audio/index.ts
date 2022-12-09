const HIGH_VOLUME = 0.2
const ZERO_VOLUME = 0
const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440
const PERIOD = 10

import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class Audio {
    gainNode: GainNode
    context: AudioContext

    constructor(context: AudioContext, oscillator: any) {
        this.context = context
        this.gainNode = this.context.createGain()
        const oscillatorNode = oscillator.getNode()
        oscillatorNode.connect(this.gainNode)
        this.gainNode.connect(this.context.destination)
    }

    start() {
        this.gainNode.gain.setValueAtTime(HIGH_VOLUME, this.context.currentTime)
    }
    stop() {
        this.gainNode.gain.setValueAtTime(ZERO_VOLUME, this.context.currentTime)
    }
}