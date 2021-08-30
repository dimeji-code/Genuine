export const SELECT_OPTION = "SELECT_OPTION"

export const pickOption = (name,value) =>{
    return {type: SELECT_OPTION, name:name, value:value}
}