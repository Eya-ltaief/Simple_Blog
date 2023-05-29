import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import LandingPage from './Pages/LandingPage';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Pages/Profile';
import Loading from './components/Spinner';

function App() {
   const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Loading /></div>;
  }
  return (
    <div className="App">
      <header className="App-header">
         {isAuthenticated? <Profile/> : <LandingPage/>}  
      </header>
    </div>
  );
}

export default App;
