import {  classifyBMI, sum } from '../component/ClassifyBMI'

describe("huhu", () => {
    test("return the cawn ", () => {
        const actual = classifyBMI(0, 'who')
        expect(actual).toBe('Nhẹ cân')
    })
    it("return the cawn ", () => {
        const actual = classifyBMI(1, 'who')
        expect(actual).toBe('Nhẹ cân')
    })
    it("return the cawn ", () => {
        const actual = classifyBMI(2, 'who')
        expect(actual).toBe('Nhẹ cân')
    })
    it("return the cawn ", () => {
        const actual = classifyBMI(30, 'who')
        expect(actual).toBe('Thừa cân')
    })
    it("return the cawn ", () => {
        const actual = classifyBMI(0, 'việt nam')
        expect(actual).toBe('Nhẹ cân')
    })
    it("return the cawn ", () => {
        const actual = classifyBMI(1, 'việt nam')
        expect(actual).toBe('Nhẹ cân')
    })
    it("return the cawn ", () => {
        const actual = classifyBMI(2, 'việt nam')
        expect(actual).toBe('Nhẹ cân')
    })
    it("return the cawn ", () => {
        const actual = classifyBMI(30, 'việt nam')
        expect(actual).toBe('Thừa cân')
    })

})