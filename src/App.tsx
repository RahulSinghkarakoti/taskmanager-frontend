import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import CategorySlider from './pages/home';
import Task from './pages/Task';


function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<CategorySlider />} />  
        <Route path="/task/:id" element={<Task />} />
      </Routes>
    </Router>
  )
}

export default App
