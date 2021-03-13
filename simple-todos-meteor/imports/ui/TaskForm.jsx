import React, { useState } from 'react';
import { TasksCollection } from "../api/TasksCollection";

export const TaskForm = ({ user }) => {
  const [text, setText] = useState("");
 
  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    Meteor.call('tasks.insert', text);

    setText('');
  };

  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit} type="submit">Add Task</button>
    </form>
  );
};