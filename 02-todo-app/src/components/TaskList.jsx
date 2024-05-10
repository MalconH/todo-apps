// CSS for this component is in src/components/TodoList

export function TaskList({ tasks, onCheck, onRemove }) {
  return (
    <ul className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            onCheck={() => onCheck(task)}
            onRemove={() => onRemove(task)}
          />
        );
      })}
    </ul>
  );
}

function Task({ task, onCheck, onRemove }) {
  return (
    <li className="task">
      <label htmlFor={`check-task-${task.id}`} className="task-content">
        {task.content}
      </label>
      <input
        type="checkbox"
        name="check-task"
        id={`check-task-${task.id}`}
        className="check-task"
        checked={task.isChecked}
        onChange={onCheck}
      />
      <button className="remove-task" onClick={onRemove} type="button">
        Remove
      </button>
    </li>
  );
}
