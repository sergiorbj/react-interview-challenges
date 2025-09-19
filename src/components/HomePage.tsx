import { Link } from 'react-router-dom';
import './HomePage.css';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const challenges: Challenge[] = [
  {
    id: 'progress-bar',
    title: 'Progress Bar',
    description: 'An animated progress bar that completes in 3 seconds when the button is clicked.',
    difficulty: 'Easy'
  },
  {
    id: 'checklist',
    title: 'Checklist',
    description: 'A list of itens that you can add or remove.',
    difficulty: 'Easy'
  }
];

export default function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>🚀 React Interview Challenges</h1>
        <p>Practice important React concepts with common interview challenges</p>
      </header>

      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <div className="challenge-header">
              <h3>{challenge.title}</h3>
              <span className={`difficulty ${challenge.difficulty.toLowerCase()}`}>
                {challenge.difficulty}
              </span>
            </div>
            <p className="challenge-description">{challenge.description}</p>
            <Link 
              to={`/challenge/${challenge.id}`} 
              className="challenge-link"
            >
              Start Challenge →
            </Link>
          </div>
        ))}
      </div>

      {challenges.length === 0 && (
        <div className="empty-state">
          <p>No challenges available yet.</p>
        </div>
      )}
    </div>
  );
}