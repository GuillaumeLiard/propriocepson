import SingletonManager from './modules'

export const start = () => {
    const manager = SingletonManager.getInstance()
    manager.start()
}
export const stop = () => {
    const manager = SingletonManager.getInstance()
    manager.stop()
}
