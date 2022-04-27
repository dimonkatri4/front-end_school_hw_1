import { render, screen } from '@testing-library/react';
import React from 'react';
import Profile from '../Profile';
import {profileTestData} from "../../../mocks/testData";

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

const profile = profileTestData;
const pageSize = 6;
const errorTrend = 'Some error';

describe('Profile component', () => {
    it('Profile render', () => {
        render(<Profile
            profile={profile}
            pageSize={pageSize}
            errorTrend={null}
            trending={null}
            errorUser={null}
            isFetching={false}
        />);
        expect(screen.getByTestId('profile')).toBeInTheDocument();
        expect(screen.getByTestId('profile')).toHaveClass('profilePage');
    });
    it('no profile props, render preloader', () => {
        render(<Profile
            isFetching={false}
            errorUser={null}
            trending={null}
            errorTrend={null}
            profile={null}
            pageSize={pageSize} />);
        expect(screen.getByTestId('preloader')).toBeInTheDocument();
        expect(screen.queryByTestId('profile')).toBeNull();
    });
    it('error props', () => {
        render(<Profile
            profile={null}
            trending={null}
            errorUser={null}
            isFetching={false}
            errorTrend={errorTrend}
            pageSize={pageSize} />);
        expect(screen.queryByTestId('profile')).toBeNull();
        expect(screen.queryByTestId('preloader')).toBeNull();
    });
});
