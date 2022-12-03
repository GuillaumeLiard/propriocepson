export default class SingletonAudio {
    private static instance: SingletonAudio;
    gainNode: GainNode

    private constructor() {
        let oscillatiorNode: OscillatorNode
        let context = new AudioContext()
        oscillatiorNode = context.createOscillator()
        oscillatiorNode.type = "sine"
        oscillatiorNode.start()

        this.gainNode = context.createGain()

        oscillatiorNode.connect(this.gainNode)
        this.gainNode.connect(context.destination)
    }

    public static getInstance(): SingletonAudio {
        if (!SingletonAudio.instance) {
            SingletonAudio.instance = new SingletonAudio();
        }

        return SingletonAudio.instance;
    }

    start() {
        this.gainNode.gain.setValueAtTime(0.2, 0)
    }
    stop() {
        this.gainNode.gain.setValueAtTime(0, 0)
    }
}