import Audio from './Audio'
import Oscillator from './Audio/oscillator'

export default class SingletonManager {
    private static instance: SingletonManager;
    private audio: Audio;

    private constructor() {
        console.log('SingletonManager constructor')
        const context = new AudioContext()
        const oscillator = new Oscillator(context)
        this.audio = new Audio(context, oscillator)
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