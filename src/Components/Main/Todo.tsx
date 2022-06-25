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

  console.log(tasks);
  return (
    <div className={TodoCss.App}>
      <span className={TodoCss.heading}>Todo App</span>
      <InputField task={task} setTask={setTask} addInput={addInput} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Todo;
