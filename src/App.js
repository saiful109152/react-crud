import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-dark py-2'>
        <div className='container'>
          <NavLink to="/" style={{ marginRight: "15px", textDecoration: "none", color:"white"}}>Home</NavLink>
          <NavLink to="/about" style={{ textDecoration: "none", color:"white" }}>About</NavLink>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
