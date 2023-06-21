import React, { Fragment, useCallback, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/context'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null);
  const [error,setError] = useState('')
  const history = useHistory()


  const date = new Date();
  const handleSubmit = () => {
    if ((name && category) && (price && image)) {
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString()
          })
          history.push('/')
        })
      })
    } else {
      setError('Fill full details')
    }
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            id="fname"
            name="Name"
            required
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            id="fname"
            name="category"
            required
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }} id="fname" name="Price" required />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

          <br />
          <input type="file"

            onChange={(e) => {
              setImage(e.target.files[0])
            }} required />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          <br></br><br></br>
          <span style={{color:'red'}}>{error}</span>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
