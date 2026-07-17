import { createContext, ReactNode, useContext, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskContextType = {
  taskList: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (title.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
  };

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id! == id));
  };

  const toggleTask = (id: number) => {
    setTaskList(
      taskList.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
}
