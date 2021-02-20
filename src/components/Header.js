import React from 'react';
import {useSelector} from 'react-redux';

export default function Header(props) {
    const color=localStorage.getItem('color');
    const count=useSelector(state=>state.countReducer);
    return(
        <nav class="navbar navbar-expand-lg navbar-light" style={{'background-color':'red'}} >
            <a class="navbar-brand" href="#"><h1>{props.appName}</h1></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li> 
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color}}>addcount{count}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
             </div>
        </nav>
        

    )
    
}