import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import "./TodoList.css";
import { TrashIcon } from "./Icons";

export function TodoList() {
  const [tasks, addTask, removeTask] = useTasks();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(newTask);

    // Clear input content after submit
    setNewTask("");
  };

  const handleInput = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <form className="todo-list" action="#" id="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="new-task">
          Add a new task
        </label>
        <input
          className="new-task"
          type="text"
          id="new-task"
          placeholder="Steal the moon..."
          name="task"
          onInput={handleInput}
          value={newTask}
        />
        {/* Disabled if textfield is only spaces */}
        <button
          className="add-task"
          type="submit"
          disabled={!newTask.trim()}
          title="Try writing something">
          Add
        </button>
      </form>
      <section className="tasks" aria-label="Added tasks">
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <li className="task" key={task.id}>
                <p className="task-content">{task.content}</p>
                <button
                  className="remove-task"
                  type="button"
                  onClick={() => removeTask(task.id)}
                  aria-label="Remove task">
                  <TrashIcon />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
