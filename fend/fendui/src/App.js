import './App.css';
import { Home } from './Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AudioConverter } from './Pages/AudioConverter';
import Login from './Pages/login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>} exact/>
      <Route path = '/conversion' element = {<AudioConverter/>}/>
      <Route element = {<Login/>} path = "/login"/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
