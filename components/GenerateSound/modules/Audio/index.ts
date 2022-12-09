
const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440
const PERIOD = 10

import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class Audio {
    mainGain: any
    context: AudioContext

    constructor(context: AudioContext, mainGain: any, oscillator: any) {
        this.context = context
        this.mainGain = mainGain

        const mainGainNode = mainGain.getNode()
        const oscillatorNode = oscillator.getNode()

        oscillatorNode.connect(mainGainNode)
        mainGainNode.connect(this.context.destination)
    }

    start() {
        this.mainGain.setVolumeToMax()
    }

    stop() {
        this.mainGain.setVolumeToZero()
    }
}