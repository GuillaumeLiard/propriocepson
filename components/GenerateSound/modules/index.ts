import Audio from './Audio'
import Oscillator from './Audio/oscillator'
import OscillatorLong from './Audio/oscillatorLong'
import MainGain from './Audio/mainGain'

export default class Manager {
    isCreated: boolean
    constructor() {
        this.isCreated = false
        console.log('calls new Manager')
    }
    create() {
        if (this.isCreated) return
        this._create()
        this.isCreated = true
    }
    destroy() {
        if (!this.isCreated) return
        this._destroy()
        this.isCreated = false
    }
    _create() {
        console.log('create')
    }
    _destroy() {
        console.log('destroy')

    }
}

export const abc = () => 'def'