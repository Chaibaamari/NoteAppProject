import NewTask from "./NewTask.jsx";

export default function Task({ addTask, Tasks, handleDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask addTask={addTask} />
      {Tasks.length === 0 && (
        <p className="text-stone-600 ">
          {" "}
          Is No task yet click to (Add Task) for adding a new task
        </p>
      )}
      {Tasks.length > 0 && (
        <ul className="flex flex-col gap-2 ">
          {Tasks.map((ele) => {
            return (
              <li
                key={ele.taskId}
                className="flex flex-row justify-between items-center p-3 bg-stone-200 rounded"
              >
                <span>{ele.Task}</span>
                <button
                  className="text-stone-900 hover:text-red-700"
                  onClick={() => {
                    handleDelete(ele.taskId);
                  }}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
