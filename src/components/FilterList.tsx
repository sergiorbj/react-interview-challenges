import { type FormEvent, useState } from "react";
import "./FilterList.css";

const fruits = [
  "Apple",
  "Banana",
  "Blueberry",
  "Cherry",
  "Grape",
  "Mango",
  "Orange",
  "Pineapple",
  "Strawberry",
];

function FilterList() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const handleFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(e.currentTarget.search.value);
  };

  const clearFilter = () => {
    setFilter("");
  };

  const filteredFruitsUncontrolled = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredFruitsControlled = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="filterlist-wrapper">
      <div className="filterlist-container">
        <h2>Uncontrolled Fruit Filter</h2>

        <form onSubmit={handleFilter}>
          <span>Search for a fruit:</span>
          <input type="text" name="search" placeholder="Type a fruit name..." />
          <button type="submit">Filter</button>
        </form>

        {filter && (
          <div className="active-filter">
            Filtering by: <strong>"{filter}"</strong>
            <button type="button" onClick={clearFilter}>
              Clear
            </button>
          </div>
        )}

        <ul>
          {filteredFruitsUncontrolled.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>

        {filteredFruitsUncontrolled.length === 0 && <p className="no-results">No fruits found.</p>}
      </div>

      <div className="filterlist-container">
        <h2>Controlled Fruit Filter</h2>

        <div>
          <span>Search for a fruit:</span>
          <input
            type="text"
            name="search"
            placeholder="Type a fruit name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filter && (
          <div className="active-filter">
            Filtering by: <strong>"{filter}"</strong>
            <button type="button" onClick={clearFilter}>
              Clear
            </button>
          </div>
        )}

        <ul>
          {filteredFruitsControlled.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>

        {filteredFruitsControlled.length === 0 && <p className="no-results">No fruits found.</p>}
      </div>
    </div>
  );
}

export { FilterList };
