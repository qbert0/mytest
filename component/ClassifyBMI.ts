export const  classifyBMI = (bmi: number, country: string): string  =>{
    if (country.toLowerCase() === 'việt nam') {
        if (bmi < 18.5) {
            return 'Nhẹ cân';
        } else if (bmi >= 18.5 && bmi <= 22.9) {
            return 'Cân nặng bình thường';
        } else {
            return 'Thừa cân';
        }
    } else if (country.toLowerCase() === 'who') {	
        if (bmi < 18.5) {
            return 'Nhẹ cân';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'Cân nặng bình thường';
        } else {
            return 'Thừa cân';
        }
    } else {
        return 'Không xác định';
    }
}


export const sum = (a : number, b : number) : number=> {
    return a 
}