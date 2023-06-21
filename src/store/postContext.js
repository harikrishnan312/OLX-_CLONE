import { createContext, useState } from 'react';

export const postContext = createContext(null);

 function Post({ children }) {
    const [details, setDetails] = useState()
    return (
        <postContext.Provider value={{ details, setDetails }}>
            {children}
        </postContext.Provider>
    )
}
export default Post;