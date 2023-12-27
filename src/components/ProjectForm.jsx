import { useRef, useState } from "react";

export default function ProjectForm({ onClose, onSave, onSelect }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const projectInputHandler = () => {
    if (
      title.current.value !== "" &&
      description.current.value !== "" &&
      dueDate.current.value !== ""
    ) {
      onSave({
        title: title.current.value,
        description: description.current.value,
        dueDate: dueDate.current.value,
      });

      onSelect("");
    } else {
      alert("Invalid data is entered");
    }
  };

  return (
    <div className="w-[35rem] mt-16">
      <form className="mt-4 text-right">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={() => onClose("close")}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={projectInputHandler}
          >
            Save
          </button>
        </menu>
      </form>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          title
        </label>
        <input
          ref={title}
          type="text"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          description
        </label>
        <textarea
          ref={description}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          due date
        </label>
        <input
          ref={dueDate}
          type="date"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
    </div>
  );
}
