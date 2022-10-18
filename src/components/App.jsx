import user from "./user.json";
import Profile from './Profile/Profile';

import data from "./data.json";
import StatisticsList from './StatisticsList/StatisticsList';

import friends from "./friends.json";
import FriendList from './FriendList/FriendList';


import transactions from "./transactions.json";
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';

import Section from './Section/Section';



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
    <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}/> 
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
