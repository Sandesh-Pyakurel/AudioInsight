import './App.css';
import { Home } from './Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AudioConverter } from './Pages/AudioConverter';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/conversion' element = {<AudioConverter/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
