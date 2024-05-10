import { useTask } from "../hooks/useTask";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import "./TodoList.css";

export function TodoList() {
  const [tasks, addTask, removeTask, checkTask] = useTask();

  return (
    <div className="todo-app" aria-label="Todo List">
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onCheck={checkTask} onRemove={removeTask} />
    </div>
  );
}
