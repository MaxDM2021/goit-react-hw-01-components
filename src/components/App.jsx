import ProfileCart from './ProfileCart';
import Section from './Section';
import user from "./user.json";




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Section title="profile">
    <ProfileCart item={user}/> 
    </Section>
    </div>
  );
};
