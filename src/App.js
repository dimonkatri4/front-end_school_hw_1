import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

const App = function () {
    return (
        <div className="appWrapper">
            <Router>
                <Container maxWidth="lg">
                    <Header />
                    <MainContent />
                </Container>
            </Router>
        </div>
    );
};

export default App;
