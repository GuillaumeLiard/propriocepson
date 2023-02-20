import AbstractWidget from '../Abstract/Widget'
import gsap from 'gsap'
export default class OscillatorWidget extends AbstractWidget {
    // constructor() {
    //     console.log('abc')
    // }
    changed(): void {

    }
    start() {
        const frequency = {
            value: 0
        }
        gsap.to(frequency, {
            value: 1,
        })
    }

}