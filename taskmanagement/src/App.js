// import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePageComponents/HomePage';
import LoginPage from './Components/LoginComponents/LoginPage';
import SignUpPage from './Components/LoginComponents/SignUpPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() { 

  return (
      <Router>
        <Routes>  
          <Route path='/login' element = {<LoginPage/>}/>
          <Route path='/home' element = {<HomePage/>}/>
          <Route path='/signup' element = {<SignUpPage/>}/>

          {/* default route */}
          <Route path='*' element = {<LoginPage/>} />
        </Routes>
      </Router>
      
  );
}

export default App;