import React from 'react';

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

function Main({ title, username }) {
  return (
    <div className="main-content">
      <TopNav {...{ title }} />
      { username }
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
