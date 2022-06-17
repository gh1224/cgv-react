import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from 'pages/Home';

const App = () => {
    useEffect(() => {
        document.title = '영화 그 이상의 감동. CGV';
    }, []);

    return (
        <BrowserRouter basename="cgv-react">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
