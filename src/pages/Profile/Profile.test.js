import { render, screen } from '@testing-library/react';
import React from 'react';
import Profile from './Profile';

jest.mock(
    './ProfileHeader/ProfileHeader',
    () =>
        function ProfileHeaderMock() {
            return <div />;
        }
);
jest.mock(
    './UserPosts/UserPosts',
    () =>
        function UserPostsMock() {
            return <div />;
        }
);

const profile = {
    userProfile: {},
};
const pageSize = 6;
const errorTrend = 'Some error';

describe('Profile component', () => {
    it('Profile render', () => {
        render(<Profile profile={profile} pageSize={pageSize} />);
        expect(screen.getByTestId('profile')).toBeInTheDocument();
        expect(screen.getByTestId('profile')).toHaveClass('profilePage');
    });
    it('no profile props, render preloader', () => {
        render(<Profile profile={null} pageSize={pageSize} />);
        expect(screen.getByTestId('preloader')).toBeInTheDocument();
        expect(screen.queryByTestId('profile')).toBeNull();
    });
    it('error props', () => {
        render(<Profile errorTrend={errorTrend} pageSize={pageSize} />);
        expect(screen.queryByTestId('profile')).toBeNull();
        expect(screen.queryByTestId('preloader')).toBeNull();
    });
});
