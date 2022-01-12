import React from 'react';

function Dashboard({ activeProfileId, title, username }) {
  return (
    <div className="dashboard">
      { activeProfileId }
      { title }
      { username }
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
