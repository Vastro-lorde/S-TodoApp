import React from 'react';
import { useRef, useState } from 'react';
import { TaskModel } from '../models/model';
import TaskCss from './Task.module.css';
import { FaEdit } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { STORENAME } from '../../Constants';

interface Props {
  taskItem: TaskModel;
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const Task: React.FC<Props> = ({ taskItem, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(taskItem.task);
  const iconsContainer = useRef<HTMLDivElement>(null);
  const showMenu = () => {
    if (iconsContainer.current?.style.display === 'flex') {
      iconsContainer.current.style.display = 'none';
    } else if (iconsContainer.current?.style.display === '' || iconsContainer.current?.style.display === 'none') {
      iconsContainer.current.style.display = 'flex';
    }
  };

  const changeDone = (id: string) => {
    const newTasks:TaskModel[] = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    setTasks(()=> newTasks);
    localStorage.setItem(STORENAME, JSON.stringify(newTasks))
  };

  const deleteTaskItem = (id: string) => {
    const newTasks:TaskModel[] = tasks.filter((task) => task.id !== id)
    setTasks(()=> newTasks);
    localStorage.setItem(STORENAME, JSON.stringify(newTasks))
  };

  const editTaskItem = (id: string, e: React.FormEvent) => {
    e.preventDefault();
    const newTasks:TaskModel[] = tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task));
    setTasks(()=> newTasks);
    localStorage.setItem(STORENAME, JSON.stringify(newTasks))
    setEdit(false);
  };

  return (
    <form action='' className={TaskCss.taskItem} onSubmit={(e) => editTaskItem(taskItem.id, e)}>
      {edit ? (
        <input
          type='text'
          className={TaskCss.taskItemTextInput}
          value={editTask}
          placeholder='Edit Task'
          onChange={(e) => setEditTask(e.target.value)}
        />
      ) : taskItem.done ? (
        <s className={TaskCss.taskItemText}>{taskItem.task}</s>
      ) : (
        <span className={TaskCss.taskItemText}>{taskItem.task}</span>
      )}
      <div>
        <span className={TaskCss.taskItemIconMenu} onClick={showMenu}>
          <GiHamburgerMenu />
        </span>
        <div className={TaskCss.taskItemIconsContainer} ref={iconsContainer}>
          <span className={TaskCss.taskItemIcons} onClick={() => setEdit(!taskItem.done)}>
            <FaEdit />
          </span>
          <span className={TaskCss.taskItemIcons} onClick={() => changeDone(taskItem.id)}>
            <MdDone />
          </span>
          <span className={TaskCss.taskItemIcons} onClick={() => deleteTaskItem(taskItem.id)}>
            <RiDeleteBack2Fill />
          </span>
        </div>
      </div>
    </form>
  );
};

export default Task;
