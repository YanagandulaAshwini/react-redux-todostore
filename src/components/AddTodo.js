import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import addTodo from '../actions/addTodo';
import incrementCount from '../actions/incrementCount';

export default function AddTodo(){
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const dispatch=useDispatch();
    const onSubmitHandler=()=>{
       const todo = {title:title,description:description};
       dispatch(addTodo(todo));
       dispatch(incrementCount());
       setTitle('')
       setDescription('')
    }
    return(
        <div className="row mt-5">
            <div className="col-md-4 offset-3">
                <div className="form-group">
                    <input type="text" onChange={(e)=>
                        {setTitle(e.target.value)}} 
                        placeholder="title " classname="form-control" value={title}/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={(e)=>
                        {setDescription(e.target.value)}}
                        placeholder="description" 
                        classname="form-control" value={description}/>
                </div>
                <div className="form-group">
                    <button type="btn btn-success" onClick={onSubmitHandler}>Add Todo</button>
                </div>
            </div>
        </div>
    )
}