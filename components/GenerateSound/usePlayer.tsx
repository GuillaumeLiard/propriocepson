// import SingletonManager from './modules'
import Manager, { abc } from './modules'
import { useEffect, useRef } from 'react'

// export const start = (halfWaveDuration: number) => {
//     const manager = SingletonManager.getInstance(halfWaveDuration)
//     manager.start()
// }
// export const stop = () => {
//     const manager = SingletonManager.getInstance(1)
//     manager.stop()
// }

export default function usePlayer() {
    let duration = null
    const managerRef = useRef<any>({
        destroy: () => { },
        create: () => { },
    })
    useEffect(() => {
        managerRef.current = new Manager()
        return () => {
            managerRef.current.destroy()
        }
    }, [])
    const {
        destroy,
        create,
    } = managerRef.current
    const stop = () => {
        destroy()
    }
    const play = (halfWaveDuration: number) => {
        destroy()
        create()
        duration = halfWaveDuration
    }
    return {
        play,
        stop,
        duration
    }
}