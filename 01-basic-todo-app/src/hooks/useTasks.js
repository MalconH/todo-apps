import { useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(content) {
    // Adding data-fields to new task
    const newTask = {
      id: Date.now(),
      content: content,
    };

    // Push all tasks together before setting state
    const newTasks = [];
    newTasks.push(newTask, ...tasks);

    setTasks(newTasks);
  }

  function removeTask(id) {
    // Filters out the task to remove
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }

  return [tasks, addTask, removeTask];
}
