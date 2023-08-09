import "./AddTask.css";

import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

interface formValues {
  taskContent: string;
}

export interface ItaskData {
  id: string;
  content: string;
  isComplete: boolean;
}

interface AddTaskProps {
  onAddTask: (taskContent: ItaskData) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const { register, handleSubmit } = useForm<formValues>();

  function onSubmit(data: formValues) {
    const task: ItaskData = {
      id: uuid(),
      content: data.taskContent,
      isComplete: false,
    };

    onAddTask(task);
  }

  return (
    <form
      className="add-task-container"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        id="taskContent"
        {...register("taskContent")}
      />
      <button type="submit">Criar +</button>
    </form>
  );
}
