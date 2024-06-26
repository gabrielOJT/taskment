import React, { useState } from "react";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleUpdate = () => {
    onUpdate(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <li className="bg-gray-800 rounded-lg shadow-lg mb-3 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="flex items-center justify-between p-4">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="flex-grow mr-2 p-2 bg-gray-700 text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            autoFocus
          />
        ) : (
          <div className="flex items-center space-x-3 flex-grow">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="form-checkbox h-5 w-5 text-purple-500 rounded focus:ring-purple-500 focus:ring-offset-gray-800"
            />
            <span
              className={`text-lg ${
                task.completed ? "line-through text-gray-500" : "text-gray-100"
              }`}
            >
              {task.title}
            </span>
          </div>
        )}
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="text-green-400 hover:text-green-600 focus:outline-none transition-colors duration-300"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-400 hover:text-gray-200 focus:outline-none transition-colors duration-300"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-400 hover:text-blue-600 focus:outline-none transition-colors duration-300"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-400 hover:text-red-600 focus:outline-none transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
