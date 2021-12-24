import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';
import ProfileContainer from './Profile/ProfileContainer';
import TrendingFeedContainer from './TrendingFeed/TrendingFeedContainer';

const MainContent = function () {
    return (
        <div className="mainContent">
            <Routes>
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path="/trends" element={<TrendingFeedContainer />} />
                <Route path="/profile/" element={<ProfileContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />
            </Routes>
        </div>
    );
};

export default MainContent;
