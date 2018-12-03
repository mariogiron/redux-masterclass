import { tassign } from 'tassign'
import { CHANGE_ACCOUNT_TYPE, CHANGE_FORM_PERCENT, UPDATE_PERSONAL_INFO, UPDATE_ADDRESS_INFO } from './actions';

export interface IAppState {
    personalInfo: any
    addressInfo: any
    accountType: number
    billingInfo: any
    percentCompleted: number
}

export const INITIAL_STATE: IAppState = {
    personalInfo: { },
    addressInfo: { },
    accountType: 0,
    billingInfo: {},
    percentCompleted: 0
}

export function rootReducer(state, action) {    
    switch (action.type) {
        case CHANGE_ACCOUNT_TYPE: {
            return tassign(state, action.data)
        }
            
        case CHANGE_FORM_PERCENT: {
            return tassign(state, action.data)
        }
            
        case UPDATE_PERSONAL_INFO: {
            return tassign(state, action.data)
        }
            
        case UPDATE_ADDRESS_INFO: {
            return tassign(state, action.data)
        }
    }
    return state
}