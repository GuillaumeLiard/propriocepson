import { renderHook, cleanup } from "@testing-library/react";
import usePlayer from './usePlayer'
import Manager, { abc } from "./modules";
jest.mock('./modules')
describe('usePlayer', () => {
    beforeEach(() => {
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    // afterEach(cleanup)
    it('calls new Manager only once', () => {
        const { rerender } = renderHook(() => usePlayer());
        rerender()
        expect(Manager).toHaveBeenCalledTimes(1)
    })
})