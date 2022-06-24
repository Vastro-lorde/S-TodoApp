import React from 'react';
import InputFieldCss from './InputField.module.css';

interface props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addInput: (e: React.FormEvent) => void;
}

export const InputField = ({ task, setTask, addInput }: props) => {
  return (
    <form action='' className={InputFieldCss.taskInput} onSubmit={addInput}>
      <input
        className={InputFieldCss.inputBox}
        id=''
        name='task'
        type='input'
        placeholder='Enter new task'
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type='submit' className={InputFieldCss.inputSubmit}>
        Add
      </button>
    </form>
  );
};
