import { useState } from 'react'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import CreateCrewmate from './pages/CreateCrewmate'
import { Route, Routes } from 'react-router-dom'
import DisplayCrewmates from './pages/DisplayCrewmates'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="whole-page">
      <Routes>
        <Route path="/"  element={<Layout />} >
          <Route index={true} element={<HomePage />} />
          <Route path="create/" element={<CreateCrewmate />} />
          <Route path="gallery/" element={<DisplayCrewmates />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
