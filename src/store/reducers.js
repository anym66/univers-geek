const initialState = {pannelItems : []}

function pannelAction(state = initialState, action) {
    let newState
    const pannelItemIndex = state.pannelItems.findIndex(item => item.id === action.value.id)
    switch(action.type){
        case 'RemoveInPannel' :        
            if (pannelItemIndex !== -1) {
                newState = {
                ...state,
                pannelItems: state.pannelItems.filter( (item, index) => index !== pannelItemIndex)
              }
            }
        case 'addInPannel':
            if(pannelItemIndex === -1){
                newState = {
                    ...state,
                    pannelItems: [...state.pannelItems, action.value]
                    }
            }     
        return newState || state
        default:
        return state

    }
}
export default pannelAction