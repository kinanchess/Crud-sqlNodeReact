import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Student from './Student';
import CreateStudent from './CreateStudent'
import UpdateStudent from './UpdateStudent'


//import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div>
   
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Student />}></Route>
          <Route path="/CreateStudent" element={<CreateStudent />}></Route>
          <Route path="/update/:id" element={<UpdateStudent />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
