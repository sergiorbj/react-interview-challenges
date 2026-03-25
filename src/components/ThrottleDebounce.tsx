import { useCallback, useState } from "react";
import Confetti from "js-confetti";
import "./ThrottleDebounce.css";

const confetti = new Confetti();

function throttle<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
) {
  let lastCall = 0;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function ThrottleDebounce() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(
    throttle(() => {
      confetti.addConfetti();
      setCount((c) => c + 1);
    }, 5000),
    []
  );

  const handleInsert = useCallback(
    debounce((value: string) => {
      setText(value);
    }, 500),
    []
  );

  return (
    <div className="td-wrapper">
      <div className="td-container">
        <h2>Throttle & Debounce</h2>

        <div className="td-section">
          <h3>Throttle (5s cooldown)</h3>
          <p className="td-hint">
            Click the button rapidly — confetti only fires once every 5 seconds.
          </p>
          <button type="button" className="td-confetti-btn" onClick={handleClick}>
            <span role="img" aria-label="react">⚛️</span> {count}
          </button>
        </div>

        <div className="td-section">
          <h3>Debounce (500ms)</h3>
          <p className="td-hint">
            Type fast — the text below only updates 500ms after you stop.
          </p>
          <input
            type="text"
            placeholder="Type something..."
            onChange={(e) => handleInsert(e.target.value)}
          />
          <span className="td-output">
            {text ? `Debounced: "${text}"` : "Waiting for input..."}
          </span>
        </div>
      </div>
    </div>
  );
}

export { ThrottleDebounce };
