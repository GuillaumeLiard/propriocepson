import Audio from './Audio'
import Oscillator from './Audio/oscillator'
import Gain from './Audio/gain'

export default class SingletonManager {
    private static instance: SingletonManager;
    private audio: Audio;

    private constructor() {
        const context = new AudioContext()
        const gain = new Gain(context)
        const oscillator = new Oscillator(context)
        this.audio = new Audio(context, gain, oscillator)
    }

    public static getInstance(): SingletonManager {
        if (!SingletonManager.instance) {
            SingletonManager.instance = new SingletonManager();
        }

        return SingletonManager.instance;
    }
    start() {
        this.audio.start()
    }
    stop() {
        this.audio.stop()
    }

}