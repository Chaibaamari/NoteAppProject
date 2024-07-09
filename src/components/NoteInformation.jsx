import Task from "./Task.jsx";

export default function NoteInformation({ project, handleDelete, addedTask , Tasks , handleDeletetask  }) {
    const formateDate = new Date(project.date).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {project.title}
                    </h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={handleDelete}>
                        Delete
                    </button>
                </div>

                <p className=" mb-4 text-stone-400">{formateDate}</p>
                <p className="text-stone-600">{project.description}</p>
            </header>
            <Task addTask={addedTask} Tasks={Tasks} handleDelete={handleDeletetask} />
        </div>
    );
}