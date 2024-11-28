import SideBar from "./components/SideBar.jsx";
import MainContainer from "./components/MainContainer.jsx";
import { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import NoteInformation from "./components/NoteInformation.jsx";

function App() {
  const initialState = JSON.parse(
    localStorage.getItem("addingAnewProject")
  ) || {
    SelectNewProjectId: undefined,
    prject: [],
    tasks: [],
  };

  const [addingAnewProject, setAddingNewProject] = useState(initialState);

  useEffect(() => {
    localStorage.setItem(
      "addingAnewProject",
      JSON.stringify(addingAnewProject)
    );
  }, [addingAnewProject]);

  function addTask(task) {
    if (task == "") {
      alert("please enter a task");
      return;
    }

    const NewTask = {
      Task: task,
      projectId: addingAnewProject.SelectNewProjectId,
      taskId: Math.random(),
    };

    setAddingNewProject((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks, NewTask],
      };
    });
  }
  function deletTask(taskId) {
    setAddingNewProject((prev) => {
      return {
        ...prev,
        tasks: addingAnewProject.tasks.filter((ele) => ele.taskId !== taskId),
      };
    });
  }

  function handleInfo(Id) {
    setAddingNewProject((prev) => {
      return {
        ...prev,
        SelectNewProjectId: Id,
      };
    });
  }

  function handleDeletion() {
    setAddingNewProject((prev) => {
      return {
        ...prev,
        SelectNewProjectId: null,
        prject: addingAnewProject.prject.filter(
          (ele) => ele.Id !== addingAnewProject.SelectNewProjectId
        ),
      };
    });
  }
  function HandlingSwaping() {
    setAddingNewProject((prev) => {
      return {
        ...prev,
        SelectNewProjectId: null,
      };
    });
  }
  function AddNewProject(Project) {
    const NewProject = {
      ...Project,
      Id: Math.random(),
    };
    setAddingNewProject((prev) => {
      return {
        ...prev,
        SelectNewProjectId: undefined,
        prject: [...prev.prject, NewProject],
      };
    });
  }

  const projectSelected = addingAnewProject.prject.find(
    (project) => project.Id === addingAnewProject.SelectNewProjectId
  );

  let content = (
    <NoteInformation
      project={projectSelected}
      handleDelete={handleDeletion}
      addedTask={addTask}
      Tasks={addingAnewProject.tasks}
      handleDeletetask={deletTask}
    />
  );
  if (addingAnewProject.SelectNewProjectId === null) {
    content = <NewProject onAdd={AddNewProject} />;
  } else {
    if (addingAnewProject.SelectNewProjectId === undefined) {
      content = <MainContainer onselect={HandlingSwaping} />;
    }
  }
  return (
    <>
      <menu className="flex flex-row  gap-8 h-screen">
        <SideBar
          onselect={HandlingSwaping}
          project={addingAnewProject.prject}
          handleInforamtion={handleInfo}
        />
        {content}
      </menu>
    </>
  );
}

export default App;
