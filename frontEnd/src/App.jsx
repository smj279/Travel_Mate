
import { Routes, Route} from "react-router-dom";
import './App.css'
import LandingPage from './pages/landingPage.jsx';
import GreenBeck from './pages/greenbeck.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signUp.jsx';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/user/login" element={<Login />} /> 
          <Route path="/user/sign-up" element={<SignUp />} /> 
          <Route path="/greenbeck" element={<GreenBeck />} />
      </Routes>
    </>
  )
}

export default App;



