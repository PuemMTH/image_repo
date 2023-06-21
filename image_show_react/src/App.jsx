import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ShowImage from './pages/show_image'
import SaveImage from './pages/save_image'

function App() {
  const [image, setImage] = useState(null)

  return (
    <Router>
      <Routes>
        <Route path="/show_image/:id" element={<ShowImage />} />
        <Route path="/save_image" element={<SaveImage />} />
      </Routes>
    </Router>

  )
}

export default App
