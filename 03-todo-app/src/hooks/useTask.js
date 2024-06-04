import { useState } from "react";

export function useTask(storageKey) {
  const [tasks, setTasks] = useState(() => {
    console.log("rerun");
    if (localStorage.getItem(storageKey)) {
      return JSON.parse(localStorage.getItem(storageKey));
    }

    // If there's nothing saved in local storage
    return [];
  }, [storageKey]);

  const addTask = (content) => {
    const newTask = {
      content: content,
      id: Date.now(),
      isChecked: false,
    };

    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks(
      // include only tasks which id's is different to the id passed as argument
      tasks.filter((task) => task.id !== taskId)
    );
  };

  const checkTask = (taskId) => {
    // Toggle boolean of isCheck property of the task
    for (const task of tasks) {
      if (task.id === taskId) {
        task.isChecked = !task.isChecked;
        break;
      }
    }

    setTasks([...tasks]);
  };

  return [tasks, addTask, removeTask, checkTask];
}
