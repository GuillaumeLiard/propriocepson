import { start, stop } from './controller'
import styles from './index.module.scss'
const VERSION = 6
export default function GenerateSound() {

    return (
        <div className={styles.main}>
            <div className="header">
                <h2>GenerateSound</h2>
                <p>version : {VERSION}</p>
            </div>
            <div className={styles.inputs}>
                <button className={styles.button} onClick={() => start()}>
                    start
                </button>
                <button className={styles.button} onClick={() => start(2)}>
                    start 2x
                </button>
                <button className={styles.button} onClick={() => start(3)}>
                    start 3x
                </button>
                <button className={styles.button} onClick={() => start(4)}>
                    start 4x
                </button>
                <button className={styles.button} onClick={stop}>
                    stop
                </button>
            </div>
        </div>
    )
}
