import { render, screen } from '@testing-library/react';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import {profileTestData} from "../../../mocks/testData";

const profile = profileTestData;

describe('ProfileHeader component', () => {
    it('ProfileHeader render', () => {
        render(<ProfileHeader profile={profile} />);
        expect(screen.getByTestId('profileUserInfo')).toBeInTheDocument();
    });
});
