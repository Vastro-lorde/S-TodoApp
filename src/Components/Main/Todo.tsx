import React, { useState } from 'react';
import { InputField } from './InputField/InputField';
import TodoCss from './Todo.module.css';

function Todo() {
  const [task, setTask] = useState<string>('');
  console.log(task);
  const addInput = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className={TodoCss.App}>
      <span className={TodoCss.heading}>Todo App</span>
      <InputField task={task} setTask={setTask} addInput={addInput} />
    </div>
  );
}

export default Todo;
