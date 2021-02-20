import {ADD_TODO} from '../actions/actionType';

const initialize=[{title:'hello',description:'welcome'}]
const todoReducer=(state=initialize,action)=>{
    switch(action.type){
        case ADD_TODO:
            return[...state,action.todo]
        default:
            return state;
    }
}
export default todoReducer;