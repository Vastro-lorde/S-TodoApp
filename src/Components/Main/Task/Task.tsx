import React from 'react';
import { TaskModel } from '../models/model';
import TaskCss from './Task.module.css';
import { FaEdit } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { RiDeleteBack2Fill } from 'react-icons/ri';

interface Props {
  taskItem: TaskModel;
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const Task: React.FC<Props> = ({ taskItem, tasks, setTasks }) => {
  return (
    <form action='' className={TaskCss.taskItem}>
      <span className={TaskCss.taskItemText}>{taskItem.task}</span>
      <div className={TaskCss.taskItemIcons}>
        <span>
          <FaEdit />
        </span>
        <span>
          <MdDone />
        </span>
        <span>
          <RiDeleteBack2Fill />
        </span>
      </div>
    </form>
  );
};

export default Task;
