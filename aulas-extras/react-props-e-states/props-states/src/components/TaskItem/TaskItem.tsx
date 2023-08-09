import { ItaskData } from "../addTask/AddTask";
import "./TaskItem.css";

interface TaskItemProps {
  taskData: ItaskData;
  onDelete: (id: string) => void;
  onChecked: (id: string) => void;
}

export function TaskItem({ taskData, onDelete, onChecked }: TaskItemProps) {
  return (
    <div
      className={
        taskData.isComplete
          ? "task-item-container active"
          : "task-item-container"
      }
    >
      <input
        type="checkbox"
        onClick={() => onChecked(taskData.id)}
        checked={taskData.isComplete}
      />
      <p>{taskData.content}</p>
      <button onClick={() => onDelete(taskData.id)}>deletar</button>
    </div>
  );
}
