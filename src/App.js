import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  signOut
 } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
       .then(({ user }) => {
      setUser(user);
    })
    .catch((error) => {
      setErrorMessage('The password is invalid or the user does not have an account.')
      console.log(error.message);
    })
  }

  function logout() {
    signOut(auth);
  }

  return (
    <div className='App'>
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {user.email}
    </div>
  );
}

export default App;
