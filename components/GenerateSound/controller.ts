import SingletonManager from './modules'

export const start = (speed = 1) => {
    const manager = SingletonManager.getInstance(speed)
    manager.start()
}
export const stop = () => {
    const manager = SingletonManager.getInstance(1)
    manager.stop()
}
