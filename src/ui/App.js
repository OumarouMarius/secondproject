import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../ui/pages/Home/Home';
import Loading from '../ui/pages/Loadingpage/Loading';
import Notfound from '../ui/pages/Notfound/Notfound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Loading' element={<Loading />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
