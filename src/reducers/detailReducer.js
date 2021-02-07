const initialState = {
    game:{},
    screen:{}
};

const detailReducer = (state=initialState, action) => {
    switch (action.type){
        case "GET_DETAIL":
            // console.log(action.payload)
            return{
                ...state,
                game: action.payload.game,
                screen: action.payload.screen
            }
        default:
            return{
                ...state
            }
    }
}

export default detailReducer;