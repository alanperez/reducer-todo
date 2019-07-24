import React, {useState} from 'react'

const Form = (props) => {
  const [todo, setTodo] = useState('test')

  const handleChanges = e => {
    setTodo({ [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodo(e,todo.item)
    setTodo({ item: ''})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' name='item' value={todo} onChange={handleChanges} />
        </label>
        <button >Add Todo</button>
        <button onClick={props.clearCompleted}>CLear</button>
      </form>
    </div>
  )
}

export default Form