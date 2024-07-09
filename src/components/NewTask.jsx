import { useState } from "react";

export default function NewTask({ addTask }) {
  const [clicked, setClicked] = useState();

  function handleChange(event) {
    setClicked(event.target.value);
  }
  function Add() {
    addTask(clicked);
    setClicked("")
  }
  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        className="bg-stone-200 rounded p-1 border border-b-stone-800 hover:border-b-stone-950 focus:outline-none"
        value={clicked}
        onChange={handleChange}
      />
      <button className="text-stone-600 hover:text-stone-950" onClick={Add}>
        Add Task
      </button>
    </div>
  );
}
