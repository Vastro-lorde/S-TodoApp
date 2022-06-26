import React, { useState } from 'react';
import { TaskModel } from '../models/model';
import Task from '../Task/Task';
import TodoListCss from './TodoList.module.css';

interface Props {
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

export default function TodoList({ tasks, setTasks }: Props) {
  const updateTime = () => {
    let past = Date.now();
    let current = new Date(past);
    setTimeout(() => setTime(updateTime()), 100);
    return current.toString();
  };
  const [time, setTime] = useState<string>(updateTime);
  return (
    <div className={TodoListCss.todoList}>
      <p>Total tasks: {tasks.length}</p>
      {tasks.map((task) => (
        <Task taskItem={task} key={task.id} tasks={tasks} setTasks={setTasks} />
      ))}
      <hr />
      <p className={TodoListCss.time}>{time}</p>
    </div>
  );
}
