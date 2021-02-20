import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Provider} from 'react-redux';
import{createStore,combineReducers} from 'redux';//combineReducers is react hook :its accept multiple reducers
import TodoList from './components/TodoList';
import todoReducer from './reducers/todoReducer';
import countReducer from './reducers/countReducer';
// here we are create two store its not possible so we have to create only one stote for that combine both stores in one store
//const store=createStore(todoReducer)
//const store=createStore(countReducer)
//here count,todo are alias names for reducers in line 13;
const rootReducer=combineReducers({todoReducer,countReducer})//root reducer is common reducer for todo&count reducers
const store=createStore(rootReducer)//now only single store for both reducers
store.subscribe(()=>console.log(store.getState()));
function App() {
  localStorage.setItem('color','aqua');
  return (
    <Provider store={store}>
    <Header appName="legato"/>
    <TodoList/>
    </Provider>

    
  );
}

export default App;
