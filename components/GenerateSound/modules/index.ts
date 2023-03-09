import Audio from './Audio'
import Oscillator from './Audio/oscillator'
// import OscillatorLong from './Audio/oscillatorLong'
import MainGain from './Audio/mainGain'
import AudioContextSingleton from './Audio/audioContextSingleton'
import gsap from 'gsap'

export default class Manager {
    isCreated: boolean
    constructor() {
        this.isCreated = false
        console.log('calls new Manager')
    }
    create(halfWaveDuration: number) {
        if (this.isCreated) return
        this._create(halfWaveDuration)
        this.isCreated = true
    }
    destroy() {
        if (!this.isCreated) return
        this._destroy()
        this.isCreated = false
    }
    _create(halfWaveDuration: number) {
        const mainGain = new MainGain()
        const nodesPiste1: any[] = [
            new Oscillator(halfWaveDuration)
        ]
        const nodesPiste2: any[] = [
            // new OscillatorLong(speedLong)
        ]
        const audio = new Audio(mainGain, nodesPiste1, nodesPiste2)
        audio.start()
    }
    _destroy() {
        console.log('destroy')
        gsap.globalTimeline.clear()
        AudioContextSingleton.destroy()

    }
}

export const abc = () => 'def'