import { useEffect } from "react";
import { useTask } from "../hooks/useTask";
import { TaskList } from "./TaskList";
import "./TodoList.css";

export function TodoList() {
  const STORAGE_KEY = "userTasks";

  const [tasks, addTask, removeTask, checkTask] = useTask(STORAGE_KEY);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskContent = e.target["new-task"].value;

    // Don't add empty tasks
    if (!taskContent.trim()) return;

    addTask(taskContent);

    // empty task text field
    e.target["new-task"].value = "";
  };

  return (
    <section className="todo-list" aria-labelledby="todo-list-title">
      <h2 id="todo-list-title">Todo List</h2>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <label className="task-label" htmlFor="new-task">
          Add a task
        </label>
        <div className="input-wrapper">
          <input className="new-task" type="text" id="new-task" placeholder="Steal the cake 🍰" />
          <button className="submit-task" type="submit">
            Add task
          </button>
        </div>
      </form>

      <TaskList tasks={tasks} onCheck={checkTask} onDelete={removeTask} />
    </section>
  );
}
