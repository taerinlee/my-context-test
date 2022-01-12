import React from 'react';
import { UserContext, UserDispatchContext, UserProvider } from './UserContext';

function SideNav({ activeProfileId }) {
  return (
    <nav className="side-nav">
      <h1>
        ID:
        {activeProfileId}
      </h1>
    </nav>
  );
}

function TopNav({ title }) {
  return (
    <nav className="top-nav">
      <h1>
        {title}
      </h1>
    </nav>
  );
}

function Profile() {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = React.useContext(UserDispatchContext);

  return (
    <h1>
      <input value={userDetails.username} onChange={setUserDetails} />
    </h1>
  );
}

function Main() {
  return (
    <div className="dashboardContent">
      <UserProvider>
        <TopNav title="site" />
        <Profile />
      </UserProvider>
    </div>
  );
}

function Dashboard({ activeProfileId, title, username }) {
  return (
    <div className="dashboard">
      <SideNav {...{ activeProfileId }} />
      <Main {...{ title, username }} />
    </div>
  );
}

function App() {
  const [title, setTitle] = React.useState('Home');
  const [username, setUsername] = React.useState('John Doe');
  const [activeProfileId, setActiveProfileId] = React.useState('A1B2C3');

  return (
    <div className="app">
      <h1>
        Welcome,
        {username}
      </h1>
      <Dashboard {...{ activeProfileId, title, username }} />
    </div>
  );
}

export default App;
