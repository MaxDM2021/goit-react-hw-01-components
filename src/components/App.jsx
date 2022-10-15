import ProfileCart from './ProfileCart';
import StatisticsList from './StatisticsList';
import Section from './Section';
import user from "./user.json";
import data from "./data.json";



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
    </div>
  );
};
