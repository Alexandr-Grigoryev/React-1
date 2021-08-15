import Profile from './components/Profile/Profile';
import user from './user.json';

export default function App() {
  return <Profile userData={user} />;
}
