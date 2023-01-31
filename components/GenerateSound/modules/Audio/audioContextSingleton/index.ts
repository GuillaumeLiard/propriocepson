export default class AudioContextSingleton {
    private static _instance: AudioContext
    static getInstance() {
        if (!this._instance) {
            this._instance = new AudioContext()
        }
        return this._instance
    }
}