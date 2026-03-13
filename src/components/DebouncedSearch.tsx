import { useEffect, useRef, useState } from "react";
import "./DebouncedSearch.css";

const fruits = [
  "Apple",
  "Avocado",
  "Banana",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange",
  "Papaya",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

function DebouncedSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      if (search) {
        setSearchCount((prev) => prev + 1);
        setLog((prev) => [...prev, `Searched: "${search}"`]);
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [search]);

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="debounce-wrapper">
      <div className="debounce-container">
        <h2>Debounced Search</h2>

        <div className="debounce-input-area">
          <span>Search for a fruit (debounce 500ms):</span>
          <input
            type="text"
            placeholder="Type something..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="debounce-info">
          <div className="debounce-stat">
            <strong>Typing:</strong> "{search}"
          </div>
          <div className="debounce-stat">
            <strong>Debounced value:</strong> "{debouncedSearch}"
          </div>
          <div className="debounce-stat">
            <strong>Actual searches:</strong> {searchCount}
          </div>
        </div>

        <ul>
          {filteredFruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>

        {filteredFruits.length === 0 && <p className="no-results">No fruits found.</p>}

        {log.length > 0 && (
          <div className="debounce-log">
            <strong>Search log:</strong>
            {log.map((entry) => (
              <div key={entry} className="log-entry">
                {entry}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { DebouncedSearch };
