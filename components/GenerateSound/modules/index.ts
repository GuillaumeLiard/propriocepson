import Audio from './Audio'

export default class SingletonManager {
    private static instance: SingletonManager;
    private audio: Audio;

    private constructor() {
        console.log('SingletonManager constructor')
        this.audio = new Audio()
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