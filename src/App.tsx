import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProgressBar from './components/ProgressBar'
import './App.css'
import { Checklist } from './components/Checklist'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenge/progress-bar" element={<ProgressBar />} />
        <Route path="/challenge/checklist" element={<Checklist />} />
      </Routes>
    </Router>
  )
}

export default App
