import {render, screen} from "@testing-library/react";
import React from "react";
import Profile from "./Profile";

jest.mock('./ProfileHeader/ProfileHeader', () => {
    return function ProfileHeaderMock() {
        return <div></div>
    }
});
jest.mock('./UserPosts/UserPosts', () => {
    return function UserPostsMock() {
        return <div></div>
    }
})

const profile = {
    userProfile:{}
};
const pageSize = 6;
const errorTrend = 'Some error';

describe('Profile component', () => {
    it('Profile render', () => {
        render(<Profile profile={profile} pageSize={pageSize} />);
        expect(screen.getByRole('profile')).toBeInTheDocument();
        expect(screen.getByRole('profile')).toHaveClass('profilePage')
    })
    it('no profile props, render preloader', () => {
        render(<Profile profile={null} pageSize={pageSize} />);
        expect(screen.getByRole('preloader')).toBeInTheDocument();
        expect(screen.queryByRole('profile')).toBeNull();
    })
    it('error props', () => {
        render(<Profile errorTrend={errorTrend} pageSize={pageSize} />);
        expect(screen.queryByRole('profile')).toBeNull();
        expect(screen.queryByRole('preloader')).toBeNull();
    })
})