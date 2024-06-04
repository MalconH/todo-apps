export function TaskList({ tasks, onCheck, onDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => {
        return (
          <li className="task" key={task.id}>
            <p className="task-content" onClick={() => onCheck(task.id)}>
              {task.content}
            </p>
            <input
              className="task-check"
              type="checkbox"
              name="task-check"
              id="task-check"
              checked={task.isChecked}
              onClick={() => onCheck(task.id)}
            />
            <button className="task-delete" type="button" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
