import React from "react";

export default function ChecklistItem({ task, checked, onToggle }) {
  return (
    <li className={checked ? "task done" : "task"}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
        />
        <span className="checkbox-box" aria-hidden="true">✓</span>
        <span className="task-text">
          <p className="task-name">{task.name}</p>
          <p className="task-hint">{task.hint}</p>
        </span>
      </label>
    </li>
  );
}
