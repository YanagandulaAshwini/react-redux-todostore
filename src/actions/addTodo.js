import {ADD_TODO} from './actionType';
const addTodo=(data)=>{//action method
    return{
        type:ADD_TODO,
        todo:data //payload
}
}
export default addTodo;