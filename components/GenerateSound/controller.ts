import SingletonManager from './modules'

export const start = (halfWaveDuration: number) => {
    const manager = SingletonManager.getInstance(halfWaveDuration)
    manager.start()
}
export const stop = () => {
    const manager = SingletonManager.getInstance(1)
    manager.stop()
}
