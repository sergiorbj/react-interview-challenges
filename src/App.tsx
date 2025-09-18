import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProgressBar from './components/ProgressBar'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenge/progress-bar" element={<ProgressBar />} />
      </Routes>
    </Router>
  )
}

export default App
