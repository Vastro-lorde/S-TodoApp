import React from 'react';
import { useRef } from 'react';
import { TaskModel } from '../models/model';
import TaskCss from './Task.module.css';
import { FaEdit } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
  taskItem: TaskModel;
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const Task: React.FC<Props> = ({ taskItem, tasks, setTasks }) => {
  const iconsContainer = useRef<HTMLDivElement>(null);
  const showMenu = () => {
    if (iconsContainer.current?.style.display === 'flex') {
      iconsContainer.current.style.display = 'none';
    } else if (iconsContainer.current?.style.display === '' || iconsContainer.current?.style.display === 'none') {
      iconsContainer.current.style.display = 'flex';
    }
  };

  const changeDone = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };
  const deleteTaskItem = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  console.log(tasks);
  return (
    <form action='' className={TaskCss.taskItem}>
      {taskItem.done ? (
        <s className={TaskCss.taskItemText}>{taskItem.task}</s>
      ) : (
        <span className={TaskCss.taskItemText}>{taskItem.task}</span>
      )}
      <div>
        <span className={TaskCss.taskItemIconMenu} onClick={showMenu}>
          <GiHamburgerMenu />
        </span>
        <div className={TaskCss.taskItemIconsContainer} ref={iconsContainer}>
          <span className={TaskCss.taskItemIcons}>
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
