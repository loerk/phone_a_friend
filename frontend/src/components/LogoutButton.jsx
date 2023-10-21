import { usePassageLogout } from '../hooks';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const { logout } = usePassageLogout();

  const navigate = useNavigate();

  const signout = () => {
    logout();
    navigate('/');
  };
  return (
    <button
      style={{ padding: '1rem', borderRadius: '5%', border: 'none', cursor: 'pointer' }}
      onClick={signout}
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
