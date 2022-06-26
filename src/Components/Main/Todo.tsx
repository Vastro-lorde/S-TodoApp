import React, { useState } from 'react';
import { InputField } from './InputField/InputField';
import { TaskModel } from './models/model';
import TodoCss from './Todo.module.css';
import TodoList from './TodoList/TodoList';

function Todo() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const addInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          task: task,
          done: false,
        },
      ]);
      setTask('');
    }
  };
  return (
    <div className={TodoCss.App}>
      <span className={TodoCss.heading}>Todo App</span>
      <InputField task={task} setTask={setTask} addInput={addInput} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <p className={TodoCss.footer}>
        Copyrights: Seun Daniel Omatsola{' '}
        <a href='https://github.com/Vastro-lorde' className={TodoCss.socialLink}>
          @Vastro-lorde
        </a>
      </p>
    </div>
  );
}

export default Todo;
