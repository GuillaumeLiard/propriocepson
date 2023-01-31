import AudioContextSingleton from './audioContextSingleton'

export default class Gain {
    context: AudioContext
    gainNode: GainNode

    constructor() {
        this.context = AudioContextSingleton.getInstance()
        this.gainNode = this.context.createGain()
    }

    getNode() {
        return this.gainNode
    }
}