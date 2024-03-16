import {  classifyBMI, sum } from '../component/ClassifyBMI'

describe("kiểm thử đơn vị", () => {
    test("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(0, 'who')
        expect(actual).toBe('Nhẹ cân')
    })
    it("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(1, 'who')
        expect(actual).toBe('Nhẹ cân')
    })
    it("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(2, 'who')
        expect(actual).toBe('Nhẹ cân')
    })
    it("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(30, 'who')
        expect(actual).toBe('Thừa cân')
    })
    it("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(0, 'việt nam')
        expect(actual).toBe('Nhẹ cân')
    })
    it("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(1, 'việt nam')
        expect(actual).toBe('Nhẹ cân')
    })
    it("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(2, 'việt nam')
        expect(actual).toBe('Nhẹ cân')
    })
    it("trả về tình trạng cân nặng ", () => {
        const actual = classifyBMI(30, 'việt nam')
        expect(actual).toBe('Thừa cân')
    })

})

describe("Kiểm thử với độ đo kiểm thử C2", () => {
    test("viet nam nhe can", () => {
        const actual = classifyBMI(12.3, "việt nam")
        expect(actual).toBe("Nhẹ cân")
    })
    test("viet nam trung binh", () => {
        const actual = classifyBMI(20, "việt nam")
        expect(actual).toBe("Cân nặng bình thường")
    })
    test("viet nam thua can", () => {
        const actual = classifyBMI(23, "việt nam")
        expect(actual).toBe("Thừa cân")
    })
    test("who nhe can", () => {
        const actual = classifyBMI(12.3, "who")
        expect(actual).toBe("Nhẹ cân")
    })
    test("who trung binh", () => {
        const actual = classifyBMI(20, "who")
        expect(actual).toBe("Cân nặng bình thường")
    })
    test("who thua can", () => {
        const actual = classifyBMI(25, "who")
        expect(actual).toBe("Thừa cân")
    })
    test("truong hop can nang khong hop le", () => {
        const actual = classifyBMI(-2, "who")
        expect(actual).toBe("Không xác định")
    })

})