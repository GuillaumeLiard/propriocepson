import AbstractWidget from '../Abstract/Widget'
import AbstractDirector from '../Abstract/Director'
import AudioContextSingleton from './../../Audio/audioContextSingleton'

const LOW_FREQUENCY = 220
const HIGH_FREQUENCY = 440
const PERIOD = 10
import gsap from 'gsap'

export default class OscillatorWidget extends AbstractWidget {
    oscillatorNode: OscillatorNode
    context: AudioContext
    timeline: any
    constructor(director: AbstractDirector) {
        super(director)
        this.context = AudioContextSingleton.getInstance()
        this.oscillatorNode = this.context.createOscillator()
        console.log('abc')
    }
    changed(): void {
        this.director.widgetChanged(this)
    }
    // start() {
    //     const frequency = {
    //         value: 0
    //     }
    //     // gsap.to(frequency, {
    //     //     value: 1,
    //     // })
    // }
    start() {
        this.oscillatorNode = this.context.createOscillator()
        this.oscillatorNode.type = "sine"
        this.oscillatorNode.start()
        this.configureTimeline()
        this.startTimelineRound()

    }
    configureTimeline() {
        const frequency = {
            value: LOW_FREQUENCY
        }
        this.timeline = gsap.timeline({
            paused: true,
            yoyo: true,
            onComplete: () => {
                this.changed()
            }
        })
        const up = gsap.to(frequency, {
            value: HIGH_FREQUENCY,
            duration: PERIOD / 2,
            ease: 'power1.inOut',
            onUpdate: () => {
                this.setFrequency(frequency.value)
            },

        })
        this.timeline.add(up)
    }
    startTimelineRound() {
        this.timeline.start()
    }

    setFrequency(frequencyInHertz: number) {
        this.oscillatorNode.frequency.setValueAtTime(frequencyInHertz, this.context.currentTime); // value in hertz
    }

}