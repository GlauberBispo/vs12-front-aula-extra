import "./App.css";
import { Tasks } from "./components/Tasks/Tasks";
import { AddTask, ItaskData } from "./components/addTask/AddTask";
import { Header } from "./components/header/Header";
import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState<ItaskData[] | []>([]);

  function handleAddTask(taskData: ItaskData) {
    setTaskData((state) => [...state, taskData]);
  }

  function handleDeleteTask(idTaskToDelete: string) {
    setTaskData((state) => state.filter((task) => task.id !== idTaskToDelete));
  }

  function handleCheckedTask(idTaskToCheck: string) {
    setTaskData((state) =>
      state.map((task) => {
        if (task.id === idTaskToCheck) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  }

  console.log(taskData);

  return (
    <div className="App">
      <Header />
      <AddTask onAddTask={(taskContent) => handleAddTask(taskContent)} />
      <Tasks
        taskList={taskData}
        onDeleteTask={(id) => handleDeleteTask(id)}
        onCheckedTask={(id) => handleCheckedTask(id)}
      />
    </div>
  );
}

export default App;
