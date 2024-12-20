import logo from './logo.svg';
import './App.css';
import EffectChanllenge from './components/EffectChanllenge';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TaskList from './components/TaskList';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import List from './components/List';
import Search from './components/Search';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <AuthProvider>

    <Navbar></Navbar>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      {/* <Route path='/' element={<Home></Home>}></Route> */}


      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/' element={<ProtectedRoute componet={<Home/>}/>}></Route>
     
      <Route path='/task-list' element={<TaskList></TaskList>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/list/:name/:age' element={<List></List>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>





      <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
      <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>
      {/* <Route path='/logout' element={<Logout></Logout>}></Route> */}
    </Routes>
    
    </AuthProvider>
    </BrowserRouter>
    {/* <Login></Login> */}
    
    </>
      
       
  );
}

export default App;
