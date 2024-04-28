import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Maneger from './components/maneger/maneger'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main/>} />
        <Route path={'/maneger'} element={<Maneger/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
