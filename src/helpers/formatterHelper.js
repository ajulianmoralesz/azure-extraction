
function getIntPart(value) {
    try {
        let val = parseFloat(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return val.split('.')[0]
    } catch (error) {
        console.warn(error);
        return "0";
    }
} 
function getDecimalPart(value) {
    try {
        let val = parseFloat(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        return val.split('.')[1]
    } catch (error) {
        console.warn(error);
        return "00";
    }
}

export default{
    getDecimalPart,
    getIntPart
}