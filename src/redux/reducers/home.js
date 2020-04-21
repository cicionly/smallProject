import * as Types from "../actions/actionTypes";

let reducer = (state={lesson:0},action)=>{
    switch(action.type){
        case Types.SET_LESSON_TYPE: return {...state,lesson:action.val};
    }
    return state;
}

export default reducer;