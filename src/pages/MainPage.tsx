import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';
import TrendingFeedContainer from './TrendingFeed/TrendingFeedContainer';
import ProfileContainer from "./Profile/ProfileContainer";

const MainPage = function () {
    return (
        <div className="mainContent">
            <Routes>
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path="/trends" element={<TrendingFeedContainer />} />
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
                <Route path="*" element={<>404</>} />
            </Routes>
        </div>
    );
};

export default MainPage;
