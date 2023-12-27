import { useState } from "react";

import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const addTaskHandler = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const deleteTaskHandler = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const selectProjectHandler = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const startAddProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const addProjectHandler = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const cancelAddProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const deleteProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks}
      onDelete={deleteProjectHandler}
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={addProjectHandler}
        onCancel={cancelAddProjectHandler}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={startAddProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
        onStartAddProject={startAddProjectHandler}
        onSelectProject={selectProjectHandler}
      />
      {content}
    </main>
  );
}

export default App;
