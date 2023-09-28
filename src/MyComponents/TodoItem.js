import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className='list'>
      <div>
        <h4>Title Website</h4>
        <p>{todo.title}</p>
      </div>
      <div>
        <h4>Completed Date</h4>
        <p>{todo.desc}</p>
      </div>
      <div>
        <h4>Payment</h4>
        <p>Rs.{todo.payment}</p>
      </div>
      <div>
        <h4>Link</h4>
        <p>{todo.link}</p>
      </div>
      <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}> Delete</button>
    </div>
  )
}
