import React, { useState } from 'react';
import { InputField } from '../InputField/InputField';
import TodoCss from './Todo.module.css';

function Todo() {
  const [task, setTask] = useState<string>('');

  return (
    <div className={TodoCss.App}>
      <span className={TodoCss.heading}>Todo App</span>
      <InputField task={task} setTask={setTask} />
    </div>
  );
}

export default Todo;
