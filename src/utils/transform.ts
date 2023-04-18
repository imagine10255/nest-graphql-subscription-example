import {regPattern} from 'bear-jsutils/equal';



/**
 * 轉換為 Number, 數字才轉換
 * @param value
 */
export const toNumber = (value: any) => {
    if(new RegExp(regPattern.number).test(value)){
        if(Number.isFinite(value)){
            return value;
        }
        return Number(value);
    }
    return value;
};

/**
 * 轉換為 Number 數字才轉換, 但若為空白則轉換為 null (方便資料庫儲存)
 * @param value
 */
export const toNumberOrNull = (value: any) => {
    if(value === ''){
        return null;
    }
    return toNumber(value);
};
