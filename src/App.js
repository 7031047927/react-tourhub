import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { Kalimpong } from './components/Kalimpong';
import { Santiniketan } from './components/Santiniketan';
import { Darjeeling } from './components/Darjeeling';
import { CoochBehar } from './components/CoochBehar';
import { Malda } from './components/Malda';
import { Chandannagar } from './components/Chandannagar';
import { Murshidabad } from './components/Murshidabad';
import { Kolkata } from './components/Kolkata';
import { Login } from './components/Login';
import { Maps } from './components/Maps';
import { Signup } from './components/Signup';

function App() {
  return (
    <div>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='kalimpong' element={<Kalimpong />}></Route>
      <Route path='santiniketan' element={<Santiniketan />}></Route>
      <Route path='darjeeling' element={<Darjeeling />}></Route>
      <Route path='coochBehar' element={<CoochBehar />}></Route>
      <Route path='malda' element={<Malda />}></Route>
      <Route path='chandannagar' element={<Chandannagar />}></Route>
      <Route path='murshidabad' element={<Murshidabad />}></Route>
      <Route path='kolkata' element={<Kolkata />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      <Route path='maps' element={<Maps />}></Route>

    </Routes>
    </div>
  );
}

export default App;
