import { useState } from "react";
import { getListItem } from "../utils";

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleOnsubmit = e => {
    e.preventDefault();
    addTodo(getListItem(title));
    setTitle("");
  };
  return (
    <div className="mt-8">
      <form className="md:w-8/12 flex mx-auto" onSubmit={handleOnsubmit}>
        <input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          className=" px-4 flex-1 mr-4 w-full"
        />
        <button
          type="submit"
          disabled={!title || title === ""}
          className="bg-blue-500 disabled:bg-gray-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};
