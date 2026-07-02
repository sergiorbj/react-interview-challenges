import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProgressBar from './components/ProgressBar'
import './App.css'
import { Checklist } from './components/Checklist'
import { FilterList } from './components/FilterList'
import { DebouncedSearch } from './components/DebouncedSearch'
import { ThrottleDebounce } from './components/ThrottleDebounce'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenge/progress-bar" element={<ProgressBar />} />
        <Route path="/challenge/checklist" element={<Checklist />} />
        <Route path="/challenge/filter-list" element={<FilterList />} />
        <Route path="/challenge/debounced-search" element={<DebouncedSearch />} />
        <Route path="/challenge/throttle-debounce" element={<ThrottleDebounce />} />
        <Route path="/challenge/product-list" element={<ProductList />} />
      </Routes>
    </Router>
  )
}

export default App
