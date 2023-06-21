import React, {useContext, useEffect, useState } from 'react';

import './View.css';
import { postContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/context';
function View() {
  const {firebase} = useContext(FirebaseContext)
  const {details} =useContext(postContext);
  // console.log(details);
  const [userDetails,setUserDetails] = useState();
  useEffect(()=>{
    const {userId} = details
    firebase.firestore().collection('user').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data());
      });
    })
  },[])
    return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={details.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {details.price} </p>
          <span>{details.name}</span>
          <p>{details.category}</p>
          <span>{details.createdAt}</span>
        </div>
        {userDetails &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
