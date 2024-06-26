import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Task } from "../types/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  return (
    <TransitionGroup component="ul" className="space-y-3">
      {tasks.map((task) => (
        <CSSTransition key={task.id} timeout={300} classNames="task">
          <TaskItem
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;
