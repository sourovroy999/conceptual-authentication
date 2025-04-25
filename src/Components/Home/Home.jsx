import React, { createContext, useState } from 'react';

export const HomeContext=createContext(null)

const Home = (data) => {

    const[homeData, setHomeData]=useState('from home')
    return (
        <div className='flex justify-center items-center h-screen'>
           <HomeContext.Provider value={homeData}>
            {data.children}
           </HomeContext.Provider>
        </div>
    );
};

export default Home;