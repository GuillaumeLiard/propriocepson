import usePlayer from './usePlayer'
import styles from './index.module.scss'
const VERSION = 8
export default function GenerateSound() {
    // const { play, stop } = usePlayer()
    const {
        play,
        stop,
        duration
    } = usePlayer()
    console.log('duration', duration)
    // const play = () => console.log('play')
    // const stop = () => console.log('stop')
    return (
        <div className={styles.main}>
            <div className="header">
                <h2>GenerateSound</h2>
                <p>version : {VERSION}</p>
                <p>duration : {duration}</p>
            </div>
            <div className={styles.container}>
                <div className={styles.inputs}>
                    <button className={styles.button} onClick={() => play(5)}>
                        play wave (5s)
                    </button>
                    <button className={styles.button} onClick={() => play(6)}>
                        play wave (6s)
                    </button>
                    <button className={styles.button} onClick={() => play(7)}>
                        play wave (7s)
                    </button>
                    <button className={styles.button} onClick={() => play(8)}>
                        play wave (8s)
                    </button>
                </div><div className={styles.inputs}>
                    <button className={styles.button} onClick={() => play(9)}>
                        play wave (9s)
                    </button>
                    <button className={styles.button} onClick={() => play(10)}>
                        play wave (10s)
                    </button>
                    <button className={styles.button} onClick={() => play(11)}>
                        play wave (11s)
                    </button>
                    <button className={styles.button} onClick={() => play(12)}>
                        play wave (12s)
                    </button>
                </div>
                <div className={styles.inputs}>
                    <button className={styles.button} onClick={stop}>
                        stop
                    </button>
                </div>
            </div>
        </div>
    )
}
