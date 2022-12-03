import SingletonAudio from './Audio'

export const start = () => {
    const audio = SingletonAudio.getInstance()
    audio.start()
}
export const stop = () => {
    const audio = SingletonAudio.getInstance()
    audio.stop()
}
