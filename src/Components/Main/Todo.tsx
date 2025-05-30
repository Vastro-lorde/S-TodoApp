import React, { useEffect, useState } from "react";
import { InputField } from "./InputField/InputField";
import type { TaskModel } from "./models/model";
import TodoCss from "./Todo.module.css";
import TodoList from "./TodoList/TodoList";
import { STORENAME } from "../Constants";

function Todo() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  useEffect(() => {
    const newObject = JSON.parse(localStorage.getItem('tasks') as any);
    if (newObject === null) {
      setTasks([]);
    } else {
      setTasks(newObject);
    }
  }, []);

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
    localStorage.setItem(STORENAME, JSON.stringify([
      ...tasks,
      {
        id: Date.now().toString(),
        task: task,
        done: false,
      },
    ]));
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
