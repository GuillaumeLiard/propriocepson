export default class Gain {
    context: AudioContext
    gainNode: GainNode

    constructor(context: AudioContext) {
        this.context = context
        this.gainNode = this.context.createGain()
    }

    getNode() {
        return this.gainNode
    }
}