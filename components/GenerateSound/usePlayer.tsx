import Manager from './modules'
import { useEffect, useRef, useState } from 'react'


export default function usePlayer() {
    const [duration, setDuration] = useState<number | null>(null)
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
    const stop = () => {
        console.log('stop')
        managerRef.current.destroy()
        setDuration(null)
    }
    const play = (halfWaveDuration: number) => {
        console.log('play', halfWaveDuration)
        managerRef.current.destroy()
        managerRef.current.create()
        setDuration(halfWaveDuration)
    }
    return {
        play,
        stop,
        duration
    }
}