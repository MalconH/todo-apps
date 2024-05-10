import { useState } from "react";
// CSS for this component is in src/components/TodoList

export function AddTask({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(inputValue.trim());

    // Clear input after submitting
    setInputValue("");
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const [inputValue, setInputValue] = useState("");
  return (
    <form className="form" action="#" id="form" onSubmit={handleSubmit}>
      <label className="input-label" htmlFor="new-task">
        Add new task
      </label>
      <div className="input-wrapper">
        <input
          className="input-task"
          onInput={handleInput}
          type="text"
          name="new-task"
          id="new-task"
          placeholder="Become a trillionaire..."
          value={inputValue}
          required
        />
        <button className="add-task" type="submit" disabled={!inputValue.trim()}>
          Add
        </button>
      </div>
    </form>
  );
}
