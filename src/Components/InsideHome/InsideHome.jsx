import React, { useContext } from 'react';
import { HomeContext } from '../Home/Home';

const InsideHome = () => {
    const homeData=useContext(HomeContext)
    console.log(homeData);
    
    return (
        <div>
            Inside Home  
            {homeData}
        </div>
    );
};

export default InsideHome;