import {SELECT_OPTION} from "../actions/selectedOptions"

const initialState = {
    choices : {}
}

export default (state = initialState, action)=> {
    switch (action.type) {
        case SELECT_OPTION:
            const optionName = action.name;
            const optionVal = action.value;

        return{
            ...state,
            choices: {...state.choices ,[optionName]: optionVal }
        }
    }
    return state
}