
const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440
const PERIOD = 10

import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class Audio {
    gain: any
    context: AudioContext

    constructor(context: AudioContext, gain: any, oscillator: any) {
        this.context = context
        this.gain = gain

        const gainNode = gain.getNode()
        const oscillatorNode = oscillator.getNode()

        oscillatorNode.connect(gainNode)
        gainNode.connect(this.context.destination)
    }

    start() {
        this.gain.setVolumeToMax()
    }

    stop() {
        this.gain.setVolumeToZero()
    }
}