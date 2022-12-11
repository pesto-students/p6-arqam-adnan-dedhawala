import { useState } from "react";
import { Header } from "./components/header";
import { ListItem } from "./components/listItem";
import { TodoForm } from "./components/todoForm";
import { findIndex } from "lodash";
import { todoStatus } from "./utils";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = todo => {
    let id = todoList.length + 1;
    todo = { ...todo, id };
    console.log(todo);
    setTodoList([...todoList, todo]);
  };

  const markItemStatus = (key, status) => {
    let tempList = [...todoList];
    let index = findIndex(tempList, { id: key });
    tempList[index].status = status;
    setTodoList(tempList);
  };

  const deleteItem = key => {
    let tempList = [...todoList].filter(val => val.id !== key);
    setTodoList(tempList);
  };

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col p-8">
      <Header />
      <TodoForm addTodo={addTodo} />
      <div className="w-full flex flex-col mt-8">
        {todoList.map((value, index) => (
          <ListItem
            {...value}
            key={index}
            markItemStatus={markItemStatus}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
