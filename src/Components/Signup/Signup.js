import React,{useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/context';
import {useHistory} from 'react-router-dom'

export default function Signup() {
  const history = useHistory()
  const [userName,setUserName] =useState('');
  const [userEmail,setUserEmail] =useState('');
  const [userPhone,setUserPhone] =useState('');  
  const [userPassword,setUserPassword] =useState('');
  const {firebase} = useContext(FirebaseContext);

  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword).then((result)=>{
      result.user.updateProfile({displayName:userName}).then(()=>{
        firebase.firestore().collection('user').add({
          id:result.user.uid,
          username:userName,
          phone:userPhone
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}}
            id="fname"
            name="name"
           required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={userEmail}
            onChange={(e)=>{setUserEmail(e.target.value)}}
            id="fname"
            name="email"
          required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={userPhone}
            onChange={(e)=>{setUserPhone(e.target.value)}}
            id="lname"
            name="phone"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={userPassword}
            onChange={(e)=>{setUserPassword(e.target.value)}}
            id="lname"
            name="password"
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          history.push('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
