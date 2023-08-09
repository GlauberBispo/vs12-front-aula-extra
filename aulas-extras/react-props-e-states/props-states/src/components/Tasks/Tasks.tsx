import { TaskItem } from "../TaskItem/TaskItem";
import { ItaskData } from "../addTask/AddTask";

import "./Tasks.css";

interface TasksProps {
  taskList: ItaskData[];
  onDeleteTask: (id: string) => void;
  onCheckedTask: (id: string) => void;
}

export function Tasks({ taskList, onDeleteTask, onCheckedTask }: TasksProps) {
  const totalTasks = taskList.length;
  const totalTasksChecked = taskList.filter((task) => task.isComplete).length;

  return (
    <div className="tasks-container">
      <div className="tasks-info">
        <span>{`Tarefas criadas: ${totalTasks}`}</span>
        <span>{`Concluidas: ${totalTasksChecked}/${totalTasks}`}</span>
      </div>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <>
            <TaskItem
              key={task.id}
              taskData={task}
              onChecked={(id) => onCheckedTask(id)}
              onDelete={(id) => onDeleteTask(id)}
            />
          </>
        ))
      ) : (
        <h2>Nenhuma task cadastrada!</h2>
      )}
    </div>
  );
}
