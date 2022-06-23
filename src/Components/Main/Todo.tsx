import React from 'react';
import TodoCss from './Todo.module.css';

function Todo() {
  return (
    <div className={TodoCss.App}>
      <span className={TodoCss.heading}>Todo App</span>
    </div>
  );
}

export default Todo;
