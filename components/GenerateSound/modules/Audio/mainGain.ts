import Gain from './gain'

const ZERO_VOLUME = 0
const MAX_VOLUME = 0.2

export default class MainGain extends Gain {
    constructor(context: AudioContext) {
        super(context)
    }

    setVolumeToMax() {
        this.gainNode.gain.setValueAtTime(MAX_VOLUME, this.context.currentTime)
    }

    setVolumeToZero() {
        this.gainNode.gain.setValueAtTime(ZERO_VOLUME, this.context.currentTime)
    }
}