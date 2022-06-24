import React from 'react';
import InputFieldCss from './InputField.module.css';

interface props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField = ({ task, setTask }: props) => {
  return (
    <form action='' className={InputFieldCss.taskInput}>
      <input type='input' name='task' id='' className={InputFieldCss.inputBox} placeholder='Enter new task' required />
      <button type='submit' className={InputFieldCss.inputSubmit}>
        Add
      </button>
    </form>
  );
};
