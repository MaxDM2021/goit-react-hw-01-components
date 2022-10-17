import user from "./user.json";
import ProfileCart from './ProfileCart';

import data from "./data.json";
import StatisticsList from './StatisticsList';

import friends from "./friends.json";
import FriendList from './FriendList';


import transactions from "./transactions.json";
import TransactionsHistory from './TransactionsHistory';

import Section from './Section';



export const App = () => {
  return (
    <div
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '600px',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Section title="Profile">
    <ProfileCart item={user}/> 
    </Section>

    <Section title="Upload stats">
    <StatisticsList items={data}/> 
    </Section>

    <Section title="List of friends">
    <FriendList items={friends}/> 
    </Section>

    <Section title="Transactions History">
    <TransactionsHistory items={transactions}/> 
    </Section>

    </div>
  );
};
