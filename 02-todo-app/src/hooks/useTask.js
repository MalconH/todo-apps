import { useState } from "react";

export function useTask() {
  const [tasks, setTasks] = useState([]);

  const addTask = (content) => {
    // Create the task object
    const taskId = Date.now();
    const newTask = {
      id: taskId,
      content: content,
      isChecked: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const checkTask = (task) => {
    setTasks(
      // Maps over tasks state. Finds the specified task and toggles its `isChecked`
      tasks.map((t) => {
        if (t.id === task.id) {
          t.isChecked = !t.isChecked;
          return t;
        }

        return t;
      })
    );
  };

  // remove task
  // checkTask
  return [tasks, addTask, removeTask, checkTask];
}
