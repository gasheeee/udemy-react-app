import React from 'react';
//jsx使用時 React が必須
import './App.css';

const App = () => {
  const profiles = [
    { name: 'gasheeee', age: 20},
    { name: 'gashiyama', age: 25 },
    { name: 'ore' }
  ];

  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User key={ index } name={ profiles.name } age={ profiles.age } />
        })
      }
    </div>
  );
}

const User = props => {
  return ( 
    <h1>Hi! I am { props.name }, and {props.age} years old.</h1>
  );
}

User.defaultProps = {
  age: 10
};

export default App;
