import React, { useState } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';

export const App = () => {
    const [user, setUser] = useState({userName: 'TESTUSER'})

    return (
        <div className="App">
            <Header user={user}/>
            <Body user={user}/>
        </div>
    );
}