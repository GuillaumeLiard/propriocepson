import Manager from '.'
let manager: Manager
describe('Manager', () => {
    beforeEach(() => {
        manager = new Manager()
        jest.spyOn(manager as Manager, '_create')
        jest.spyOn(manager as Manager, '_destroy')
    })
    describe('create', () => {
        it('is guarded against consecutive calls', () => {
            manager.create()
            manager.create()
            expect(manager._create).toHaveBeenCalledTimes(1)
        })
    })
    describe('destroy', () => {
        it('is guarded against calls when there is nothing to destroy', () => {
            manager.destroy()
            expect(manager._destroy).toHaveBeenCalledTimes(0)
        })
        it('calls _destroy() if it was created before', () => {
            manager.create()
            manager.destroy()
            expect(manager._destroy).toHaveBeenCalledTimes(1)
        })
        it('is guarded against consecutive call', () => {
            manager.create()
            manager.destroy()
            manager.destroy()
            expect(manager._destroy).toHaveBeenCalledTimes(1)
        })
    })
})