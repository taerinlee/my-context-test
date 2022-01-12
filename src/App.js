import React from 'react';
import logo from './logo.svg';
import './App.css';

function GrandChildClass(props) {
  const { color } = props;

  return (
    <p>
      Color:
      {color}
    </p>
  );
}

function ChildClass(props) {
  const { color } = props;

  return <GrandChildClass color={color} />;
}

function ParentClass(props) {
  const { color } = props;

  return <ChildClass color={color} />;
}

function App() {
  return (
    <div className="App">
      <ParentClass color="blue" />
    </div>
  );
}

export default App;
