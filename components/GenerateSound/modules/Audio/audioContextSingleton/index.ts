export default class AudioContextSingleton {
    private static _instance: AudioContext | null
    static getInstance() {
        if (!this._instance) {
            this._instance = new AudioContext()
        }
        return this._instance
    }
    static destroy() {
        if (this._instance) this._instance.close()
        this._instance = null
    }
}