import { useState, useEffect } from "react";
import { saveTasks } from "../services/firestore";
import { formatTasksForDatabase } from "../utils/utils";
import { useTaskFromDB } from "./useTaskFromDB";

export function useTask() {
  const [tasks, setTasks] = useState([]);
  const status = useTaskFromDB(setTasks);

  // Executes everytime tasks is updated
  useEffect(() => {
    if (tasks.length === 0) return;

    const tasksForDB = formatTasksForDatabase(tasks);
    saveTasks(tasksForDB);
  }, [tasks]);

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

  return [tasks, addTask, removeTask, checkTask, status];
}
