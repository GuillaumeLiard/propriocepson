
const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440
const PERIOD = 10

import gsap from 'gsap'
// https://greensock.com/docs/v3/Eases

export default class Audio {
    mainGain: any
    context: AudioContext

    constructor(context: AudioContext, mainGain: any, nodes: any[]) {
        this.context = context
        this.mainGain = mainGain

        const mainGainNode = mainGain.getNode()
        const nodesNode = nodes.map(node => node.getNode())

        const connectables = [
            ...nodesNode,
            mainGainNode,
            this.context.destination
        ]

        for (let i = 0; i < connectables.length - 1; i++) {
            const currentConnectable = connectables[i]
            const nextConnectable = connectables[i + 1]
            console.log(`connecting ${currentConnectable} to ${nextConnectable}`)
            currentConnectable.connect(nextConnectable)
        }
    }

    start() {
        this.mainGain.setVolumeToMax()
    }

    stop() {
        this.mainGain.setVolumeToZero()
    }
}