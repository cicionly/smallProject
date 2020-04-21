import * as Types from "./actionTypes";

export const setLesson = (val)=>{
    return {
        type: Types.SET_LESSON_TYPE,
        val
    }
}