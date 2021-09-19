import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
};

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
};

function User(props) {
  return (
    <div className="person">
      <h1>Name:{props.name}</h1>
      <p>Email:{props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleevent = () => setCount(count + 1);
  const handleevent2 = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleevent}>Increase</button>
      <button onClick={handleevent2}>Decrease</button>
    </div>
  )
}


/* 
<Phone number='0125425465' address='barisal'></Phone>
      <Phone number='35465132' address='rajshahi'></Phone>
      <Phone number='0541354' address='khulna'></Phone>
      <Phone number='05465413' address='dhaka'></Phone>

      <Person name='Rubel' naika='mousumi'></Person>
      <Person name='Alom' naika='jara'></Person>
      <Person name='nur' naika='jannatul'></Person>
      <Person></Person>
      <Person2></Person2>
      <Person3></Person3>
      <Phone></Phone>
*/

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <h3>naika: {props.naika}</h3>
    </div>
  )
};

function Person2() {
  const person = {
    backgroundColor: 'bisque',
    border: '3px solid coral',
    margin: '10px',
    borderRadius: '10px',
  };

  return (
    <div style={person}>
      <h1>Name: Nur Alom</h1>
      <p>profession: we devoloper</p>
    </div>
  )
};

function Person3() {
  return (
    <div style={{
      backgroundColor: 'bisque',
      border: '3px solid coral',
      margin: '10px',
      borderRadius: '10px',
    }}>
      <h1>Name: Nur Alom</h1>
      <p>profession: we devoloper</p>
    </div>
  )
};

function Cinama(props) {
  return (
    <div className='person'>
      <h2>Nayok:{props.nayok}</h2>
      <h4>Nayka:{props.nayka}</h4>
    </div>
  )
}

function Phone(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>Phone: {props.number}</h1>
      <h3>Address: {props.address}</h3>
    </div>
  )
}

export default App;
