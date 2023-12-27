import noProjectImage from "../assets/no-projects.png";
import Button from "./utils/Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="A pile of document papers"
        className="w-36 h-36 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}

// return (
//     <div className="mt-24 text-center w-2/3">
//       <img
//         src={headerImage}
//         alt="a pile of document papers"
//         className="w-36 h-36 object-contain mx-auto"
//       />
//       <h2 className="text-xl font-bold text-stone-500 my-4">
//         No Project Selected
//       </h2>
//       <p className="text-stone-400 mb-4">
//         Select a project or get started with a new one.
//       </p>
//       <button
//         className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
//         onClick={() => onOpen("open")}
//       >
//         Create new project
//       </button>
//     </div>
//   );
