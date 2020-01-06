import React from 'react';
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'


const todoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton styles='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}/>  
          <IconButton styles='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />  
          <IconButton styles='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done} />
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Açōes</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(todoList)