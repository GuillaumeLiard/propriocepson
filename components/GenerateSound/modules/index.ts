import Audio from './Audio'
import Oscillator from './Audio/oscillator'
import OscillatorLong from './Audio/oscillatorLong'
import MainGain from './Audio/mainGain'

export default class SingletonManager {
    private static instance: SingletonManager;
    private audio: Audio;
    private speedLong: number;

    private constructor(speedLong: number) {
        this.speedLong = speedLong
        const mainGain = new MainGain()
        const nodesPiste1: any[] = [
            new Oscillator()
        ]
        const nodesPiste2: any[] = [
            new OscillatorLong(speedLong)
        ]
        this.audio = new Audio(mainGain, nodesPiste1, nodesPiste2)
    }

    public static getInstance(speedLong: number): SingletonManager {
        if (!SingletonManager.instance) {
            SingletonManager.instance = new SingletonManager(speedLong);
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