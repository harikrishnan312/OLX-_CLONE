import React, { useContext } from 'react'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'
import { AuthContext } from '../store/context'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function ViewPost(props) {
    const history=useHistory()
    const {user}=useContext(AuthContext)
    return (
        <div >   
            <Header />
            {user ?
            <View/>:history.push('/login')
}
        </div>
    )
}

export default ViewPost
