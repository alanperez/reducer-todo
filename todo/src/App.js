import React, {useReducer} from 'react';
import { initialState, reducer } from './reducers/index'
import Form from './components/Form'
import Todos from './components/Todos'
// import Todo from './components/Todo'

function App() {
// took 20 min to install dependendcies on the laptop....................

  const [state, dispatch] = useReducer(reducer, initialState)
  const addTodo = (e,todo) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo})
  }
  const toggleTodo = toggleid => {
    dispatch({ type: 'TOGGLE_TODO', payload: toggleid })
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' })
  }
  return (
    <div className="App">
     <h1>Todos</h1>
     <Todos toggleTodo={toggleTodo} todos={state.todos} />
     <Form addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
