import { incomeTypes } from "../action";
import { initialState } from "../states/AppStates";

/**
 * 
 * @param state 初始状态
 * @param param1 action创建函数
 * @returns 
 */

export default function (state = initialState, { type, payload }: any) {
    switch (type){
        case incomeTypes.setIncome:
            const newIncome = Object.keys(payload).map((item) => ({
                item: item,
                value: payload[item]
            }))
            return {
                ...state,
                income: newIncome
            }
        case incomeTypes.setLoan:
            const newLoan = Object.keys(payload).map((item) => ({
                item: item,
                value: payload[item]
            }))
            return {
                ...state,
                loan: newLoan
            }
        default:
            return state;
    }
}