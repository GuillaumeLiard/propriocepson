import { start, stop } from './controller'
import styles from './index.module.scss'
const VERSION = 8
export default function GenerateSound() {

    return (
        <div className={styles.main}>
            <div className="header">
                <h2>GenerateSound</h2>
                <p>version : {VERSION}</p>
            </div>
            <div className={styles.container}>
                <div className={styles.inputs}>
                    <button className={styles.button} onClick={() => start(5)}>
                        start wave (5s)
                    </button>
                    <button className={styles.button} onClick={() => start(6)}>
                        start wave (6s)
                    </button>
                    <button className={styles.button} onClick={() => start(7)}>
                        start wave (7s)
                    </button>
                    <button className={styles.button} onClick={() => start(8)}>
                        start wave (8s)
                    </button>
                </div><div className={styles.inputs}>
                    <button className={styles.button} onClick={() => start(9)}>
                        start wave (9s)
                    </button>
                    <button className={styles.button} onClick={() => start(10)}>
                        start wave (10s)
                    </button>
                    <button className={styles.button} onClick={() => start(11)}>
                        start wave (11s)
                    </button>
                    <button className={styles.button} onClick={() => start(12)}>
                        start wave (12s)
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
