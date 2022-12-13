import './App.css';

import { useState } from 'react';

import { Form } from './components/Form'
import { FormView } from './components/FormView'

import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [data, setFormData] = useState([])

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/form/view">Form View</Link>
      </nav>
      
      <main>
        <Routes>
          <Route 
            path='/' 
            element={<h1>Home Page</h1>} 
          />
          
          <Route 
            path='/form' 
            element={<Form saveData={setFormData}/>} 
          />

          <Route 
            path='/form/view' 
            element={<FormView data={data} />} 
          />
        </Routes>
      </main>
    </div>
  )  
}

export default App