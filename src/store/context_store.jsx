/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

export const CardContext = createContext({
  addButtonStyle: "",
  delButtonStyle: "",
  tooltipDelButtonStyle: "",
  task: "",
  taskList: "",
  addTask: "",
  addTaskToList: () => {},
  deleteTaskToList: () => {},
});

export default function CardContextProvider({ children }) {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addButtonCss =
    "bg-black text-white h-10 w-60 text-sm rounded-2xl hover:bg-white hover:text-black hover:border hover:border-black";
  const delButtonCss =
    "w-10 h-10 flex flex-col items-center justify-center gap-1 bg-transparent border-none rounded-lg cursor-pointer transition-all relative overflow-hidden hover:bg-red-500 hover:overflow-visible active:scale-95 group-hover:opacity-100";
  const toolTipCss =
    "absolute -top-10 bg-slate-700  text-white rounded text-xs px-3 py-2 font-semibold shadow-lg flex align-middle justify-center group-hover:opacity-0 transition-all before:absolute before:w-3 before:h-3 before:rotate-45 before:content-[''] before:-bottom-3/1";

  function handleClick() {
    let inputTask = task.trim();
    if (inputTask) {
      const arrayTask = {
        id: uuidv4(),
        data: inputTask,
      };
      setTaskList((prevTask) => [...prevTask, arrayTask]);
    }
    setTask("");
  }

  function handleDelete(id) {
    const filterList = taskList.filter((item) => {
      return item.id != id;
    });
    setTaskList(() => filterList);
    console.log(`Task was delete successes`);
  }

  const contextValue = {
    addButtonStyle: addButtonCss,
    delButtonStyle: delButtonCss,
    tooltipDelButtonStyle: toolTipCss,
    task,
    taskList,
    addTask: setTask,
    addTaskToList: handleClick,
    deleteTaskToList: handleDelete,
  };
  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
}
