import Audio from './Audio'
import Oscillator from './Audio/oscillator'
import MainGain from './Audio/mainGain'

export default class SingletonManager {
    private static instance: SingletonManager;
    private audio: Audio;

    private constructor() {
        const context = new AudioContext()
        const mainGain = new MainGain(context)
        const nodes: any[] = [
            new Oscillator(context)
        ]
        this.audio = new Audio(context, mainGain, nodes)
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