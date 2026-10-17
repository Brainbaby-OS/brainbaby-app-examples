import React, { useState, useMemo } from "react";
import ChecklistItem from "../components/ChecklistItem";
import { TASKS } from "../utils/constants";

export default function ChecklistPage() {
  const [done, setDone] = useState(() => TASKS.map(() => false));

  const completed = useMemo(() => done.filter(Boolean).length, [done]);
  const total = TASKS.length;
  const allDone = completed === total;
  const untouched = completed === 0;

  const toggle = (index) => {
    setDone((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const reset = () => setDone(TASKS.map(() => false));

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Community garden</p>
        <h1 className="page-title">Season Prep Checklist</h1>
        <p className="intro">
          Work through the six core tasks our plot committee asks every member
          to complete before the season starts. Tick items off as you go —
          your progress is saved on this page only.
        </p>
      </header>

      <section className="card" aria-label="Garden tasks">
        <div className="progress-row">
          <p className="progress-label">Progress</p>
          <p className="progress-count" aria-live="polite">
            {completed} of {total} complete
          </p>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={completed}
          aria-label="Tasks completed"
        >
          <div
            className="progress-fill"
            style={{ width: `${(completed / total) * 100}%` }}
          />
        </div>

        <ul className="task-list">
          {TASKS.map((task, index) => (
            <ChecklistItem
              key={task.id}
              task={task}
              checked={done[index]}
              onToggle={() => toggle(index)}
            />
          ))}
        </ul>

        {allDone && (
          <p className="done-banner" role="status">
            All tasks complete — your plot is ready for the season.
          </p>
        )}

        <div className="actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={reset}
            disabled={untouched}
          >
            Reset checklist
          </button>
        </div>
      </section>
    </main>
  );
}
