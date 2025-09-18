import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgressBar.css';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            setIsRunning(false);
            setIsCompleted(true);
            return 100;
          }
          return newProgress;
        });
      }, 30);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning && !isCompleted) {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setProgress(0);
    setIsRunning(false);
    setIsCompleted(false);
  };

  return (
    <div className="progress-bar-container">
      <header className="challenge-header">
        <Link to="/" className="back-link">← Back to Challenges</Link>
        <h1>🎯 Challenge: Progress Bar</h1>
        <p>Implement a progress bar that animates from 0% to 100% in 3 seconds</p>
      </header>

      <div className="progress-demo">
        <div className='progress-bar'>
            <div className='progress-bar-fill' style={{width: `${progress}%`}}>
            </div>
        </div>

        <div className='progress-bar-label'>
          {progress}%
        </div>

        <div className='progress-bar-buttons'>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        
      </div>

    </div>
  );
}