import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Register from './pages/Register'

function App() {
  return (
  <div>
  <BrowserRouter>
  <Routes>
  <Route element={<Register/>} path='register' />
  <Route element={<Register/>} path='register' />
  <Route element={<Register/>} path='register' />
  <Route element={<Register/>} path='register' />
  <Route element={<Register/>} path='register' />
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
