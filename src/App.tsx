import {Routes, Route} from 'react-router-dom';

import { Login } from "./pages/Login";
import {Home} from "./pages/Home";

import {AuthContextProvider} from './contexts/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route  path='/' element={<Login/>} />
        <Route  path='/home' element={<Home/>} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
