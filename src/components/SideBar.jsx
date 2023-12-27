export default function SideBar({ projects, selected, onOpen, onSelect }) {
  return (
    <>
      <section className="p-10 bg-stone-900 rounded-r-2xl">
        <div>
          <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
            your project
          </h2>
          <button
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            onClick={() => onOpen("open")}
          >
            + Add Project
          </button>
        </div>
        <p className="flex flex-col gap-1 my-8">
          {projects.map((project) => (
            <button
              key={project.title}
              className={`text-left text-lg ${project.title === selected ? "text-stone-200 bg-stone-800" : "text-stone-400"} hover:bg-stone-700`}
              onClick={() => onSelect(`${project.title}`)}
            >
              {project.title}
            </button>
          ))}
        </p>
      </section>
    </>
  );
}
