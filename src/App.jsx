import "./App.css";
import { useContext } from "react";
import Button from "./components/Button";
import Input from "./components/input";
import List from "./components/list";
import { CardContext } from "./store/context_store";

export default function App() {
  const {
    addButtonStyle,
    delButtonStyle,
    tooltipDelButtonStyle,
    task,
    taskList,
    addTask,
    addTaskToList,
    deleteTaskToList,
  } = useContext(CardContext);

  return (
    <div id="app" className="container">
      <div className="mb-5 flex gap-5 items-center">
        <Input
          onChange={(e) => addTask(e.target.value)}
          onValue={task}
          required
        />
        <Button onSelect={addTaskToList} addCss={addButtonStyle}>
          add task
        </Button>
      </div>
      <ul>
        {taskList &&
          taskList.map((item) => {
            return (
              <List
                key={item.id}
                rowId={item.id}
                delCss={delButtonStyle}
                tooltipCss={tooltipDelButtonStyle}
                onDel={deleteTaskToList}
              >
                {item.data}
              </List>
            );
          })}
      </ul>
    </div>
  );
}
