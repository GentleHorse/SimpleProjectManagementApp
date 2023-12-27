import { useState } from "react";

import ProjectForm from "./components/ProjectForm";
import SideBar from "./components/SideBar";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const projectFormHandler = (identifier) => {
    if (identifier === "open") {
      setIsProjectFormOpen(true);
    } else {
      setIsProjectFormOpen(false);
    }
  };

  const projectInputHandler = (inputData) => {
    setProjects((prevProjects) => {
      const updateProjects = [...prevProjects, inputData];

      return updateProjects;
    });

    setIsProjectFormOpen(false);
  };

  const projectDeleteHandler = () => {
    setProjects((prevProjects) => {
      const copyProjects = [...prevProjects];
      const deletedProject = copyProjects.filter(
        (project) => project.title !== selectedProject
      );

      return deletedProject;
    });

    setSelectedProject("");
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projects}
        selected={selectedProject}
        onOpen={projectFormHandler}
        onSelect={setSelectedProject}
      />
      {isProjectFormOpen && (
        <ProjectForm
          onClose={projectFormHandler}
          onSave={projectInputHandler}
          onSelect={setSelectedProject}
        />
      )}
      {!isProjectFormOpen && (
        <ProjectDetail
          projects={projects}
          selected={selectedProject}
          onOpen={projectFormHandler}
          onDelete={projectDeleteHandler}
        />
      )}
    </main>
  );
}

export default App;
