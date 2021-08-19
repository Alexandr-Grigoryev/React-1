import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import Container from './components/Container/Container';
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';

export default function App() {
  return (
    <Container>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
