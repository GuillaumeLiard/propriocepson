const ZERO_VOLUME = 0
const MAX_VOLUME = 0.2

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

    setVolumeToMax() {
        this.gainNode.gain.setValueAtTime(MAX_VOLUME, this.context.currentTime)
    }
    setVolumeToZero() {
        this.gainNode.gain.setValueAtTime(ZERO_VOLUME, this.context.currentTime)
    }
}