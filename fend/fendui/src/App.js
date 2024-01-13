import './App.css';
import { Home } from './Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AudioConverter } from './Pages/AudioConverter';
import Login from './Pages/login';
import Layout from './Layout/layout';
import RequireAuth from './packages/Auth/requireAuth';
import { Register } from './Pages/Register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
      <Route element = {<Login/>} path = "/login" exact/>
      <Route path = '/' element = {<Home/>} />
      <Route element = {<RequireAuth/>} >
      <Route path = '/conversion' element = {<AudioConverter/>}/>
      </Route>
      <Route element = {<Register/>} path = "/Register" />
      
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
