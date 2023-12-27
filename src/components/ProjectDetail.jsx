import { useRef, useState } from "react";

import headerImage from "../assets/no-projects.png";

export default function ProjectDetail({
  projects,
  selected,
  onOpen,
  onDelete,
}) {
  const taskInput = useRef();

  const [tasks, setTasks] = useState([]);

  const taskInputHandler = () => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, taskInput.current.value];

      return updatedTasks;
    });
  };

  const deleteTaskHandler = (task) => {
    setTasks((prevTasks => {
        const copyTasks = [...prevTasks];
        const deletedTasks = copyTasks.filter((element) => element !== task);

        return deletedTasks;
    }))
  }

  if (selected !== "") {
    const targetProject = projects.find(
      (element) => element.title === selected
    );

    return (
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {targetProject.title}
            </h1>
            <button
              onClick={onDelete}
              className="text-stone-600 hover:text-stone-950"
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{targetProject.dueDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {targetProject.description}
          </p>
        </header>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <p className="text-stone-800 my-4">
          <input
            ref={taskInput}
            type="text"
            required
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
          <button
            onClick={taskInputHandler}
            className="text-stone-700 hover:text-stone-950 m-4"
          >
            Add Task
          </button>
        </p>
        {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task} className="flex justify-between my-4">
              {task}
              <button onClick={() => deleteTaskHandler(task)} className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>}
      </div>
    );
  }

  if (selected === "") {
    return (
      <div className="mt-24 text-center w-2/3">
        <img
          src={headerImage}
          alt="a pile of document papers"
          className="w-36 h-36 object-contain mx-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project or get started with a new one.
        </p>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={() => onOpen("open")}
        >
          Create new project
        </button>
      </div>
    );
  }
}
