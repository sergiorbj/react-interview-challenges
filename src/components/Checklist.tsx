import { type FormEvent, useState } from "react";
import "./Checklist.css";

const todoList = ["Do exercises", "Read a book", "Have a good sleep"];

function Checklist() {
  const [list, setList] = useState(todoList);

  const addItemList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoItem = e.currentTarget.todoItem.value;

    setList((prev) => [...prev, todoItem]);

    e.currentTarget.reset();
  };

  const removeItemList = (item: string) => () => {
    setList((prev) => prev.filter((listItem) => listItem !== item));
  };

  return (
    <div className="checklist-wrapper">
      <div className="checklist-container">
        <ul>
          <h2>Daily Routine</h2>
          {list.map((item) => (
            <li key={item}>
              {item}{" "}
              <button type="button" onClick={removeItemList(item)}>
                X
              </button>
            </li>
          ))}
        </ul>

        <form onSubmit={addItemList}>
          <span>Put your next activity:</span>
          <input type="text" name="todoItem"></input>
          <button type="submit"> ADD </button>
        </form>
      </div>
    </div>
  );
}

export { Checklist };
