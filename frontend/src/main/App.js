import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import './App.css'
import Todo from '../todo/todo'
import Menu from '../template/menu'

export default props => (
  <div className='container'>
    <Menu />
    <Todo />
  </div>
)




