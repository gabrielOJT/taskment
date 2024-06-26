import React, { useState } from "react";

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow p-3 bg-gray-700 text-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-3 rounded-r-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
