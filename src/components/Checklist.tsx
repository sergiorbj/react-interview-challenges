import { type FormEvent, useState } from "react";
import "./Checklist.css";

const todoList = ["Do exercises", "Read a book", "Have a good sleep"];

function Checklist() {
  const [list, setList] = useState(todoList);

  const addItemList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.currentTarget.todo.value;

    setList((prev) => [...prev, value]);
    e.currentTarget.reset();
  };

  return (
    <div className="checklist-wrapper">
      <div className="checklist-container">
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <form onSubmit={addItemList}>
          <span>Put another todo on the list: </span>
          <input type="text" name="todo" />
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  );
}

export { Checklist };
