import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import { useSelector } from 'react-redux';

function App() {
  const authUser = useSelector(states => states.authUser);

  return (
    authUser ? <Dashboard /> : <Login />
  )
}

export default App
