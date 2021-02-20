import {INCREMENT_COUNT} from '../actions/actionType';

const countReducer = (state=1,action)=>{
    switch(action.type){
        case INCREMENT_COUNT:
            return state+1;
        default:
            return state;
    }
}
export default countReducer;