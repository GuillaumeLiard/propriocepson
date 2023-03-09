import Manager from '.'
let manager: Manager

import Audio from './Audio'
import Oscillator from './Audio/oscillator'
import OscillatorLong from './Audio/oscillatorLong'
import MainGain from './Audio/mainGain'
import AudioContextSingleton from './Audio/audioContextSingleton'

jest.mock('./Audio')
jest.mock('./Audio/oscillator')
jest.mock('./Audio/oscillatorLong')
jest.mock('./Audio/mainGain')
jest.mock('./Audio/audioContextSingleton')

describe('Manager', () => {
    beforeEach(() => {
        // (global as any).AudioContext = MockAudioContext
        manager = new Manager()
        jest.spyOn(manager as Manager, '_create')
        jest.spyOn(manager as Manager, '_destroy')
    })
    describe('create', () => {
        it('is guarded against consecutive calls', () => {
            manager.create(1)
            manager.create(1)
            expect(manager._create).toHaveBeenCalledTimes(1)
        })
    })
    describe('destroy', () => {
        it('is guarded against calls when there is nothing to destroy', () => {
            manager.destroy()
            expect(manager._destroy).toHaveBeenCalledTimes(0)
        })
        it('calls _destroy() if it was created before', () => {
            manager.create(1)
            manager.destroy()
            expect(manager._destroy).toHaveBeenCalledTimes(1)
        })
        it('is guarded against consecutive call', () => {
            manager.create(1)
            manager.destroy()
            manager.destroy()
            expect(manager._destroy).toHaveBeenCalledTimes(1)
        })
    })
})