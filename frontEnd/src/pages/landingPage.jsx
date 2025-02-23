
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout.jsx';
import { useAuthContext } from '../hooks/useAuthContext.jsx'
import './landing.css';


const LandingPage = () => {
  const navigate = useNavigate(); 
  const { logout } = useLogout();
  const { user } = useAuthContext();

  

  const handleLogout = () => {
    logout();
  };

  const goToLogin = () => {
    navigate('/user/login');
  };

  const goToSignup = () => {
    navigate('/user/sign-up');
  };

  return (
    <div className="landingPage">
      <p className="welcome">Welcome to TravelMate</p>
            <h1 className="discover">Discover Your Favorite <br /> Place with Us</h1>
            <p className="motto">Travel to any corner of the world, without going around in circles.</p>
      

            {user && (
        <div>
          <br /><br /><br />
          <span>logged in as {user.email}</span>
          <br /><br />
          <button onClick={handleLogout} className="logoutButton">Logout</button>
        </div>
      )}

      {!user && (
        <div>
            
        </div>
      )}
      
    </div>
  );
};

export default LandingPage;
