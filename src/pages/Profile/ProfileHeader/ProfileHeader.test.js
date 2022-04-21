import { render, screen } from '@testing-library/react';
import React from 'react';
import ProfileHeader from './ProfileHeader';

const profile = {};

describe('ProfileHeader component', () => {
    it('ProfileHeader render', () => {
        render(<ProfileHeader profile={profile} />);
        expect(screen.getByTestId('profileUserInfo')).toBeInTheDocument();
    });
});
