import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/context';
import { useHistory } from 'react-router-dom'


function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span style={{ cursor: 'pointer',padding:'20px' }} 
          onClick={() => {
            if(!user){history.push('/login')}
             } }> 
             {user ? user.displayName : 'Login'}</span>
          <hr />
        </div>
        {user && <span onClick={() => {
          firebase.auth().signOut();
          history.push('/login')
        }} style={{ cursor: 'pointer' }}> Logout</span>}

{user? <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              history.push('/create')
            }}>SELL</span>
          </div>
        </div>
        :''}
      </div>
    </div>
  );
}

export default Header;
