import { useState } from "react";
import { getTasks, saveTasks } from "../services/firestore";
import { formatTasksForDatabase, formatTasksFromDatabase } from "../utils/utils";
import { useEffect } from "react";

export function useTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let active = true;

    // fetch data
    async function getData() {
      const tasks = await getTasks();

      if (active) {
        if (tasks) setTasks(formatTasksFromDatabase(tasks));
      }
    }

    getData();

    return () => {
      active = false;
    };
  }, []);

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

  return [tasks, addTask, removeTask, checkTask];
}
