import React from 'react';
import { TaskModel } from '../models/model';
import Task from '../Task/Task';
import TodoListCss from './TodoList.module.css';

interface Props {
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

export default function TodoList({ tasks, setTasks }: Props) {
  return (
    <div className={TodoListCss.todoList}>
      {tasks.map((task) => (
        <Task taskItem={task} key={task.id} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}
