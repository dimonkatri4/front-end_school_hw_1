import { render, screen } from '@testing-library/react';
import React from 'react';
import UserPosts from '../UserPosts';

jest.mock(
    '../UserPostItem',
    () =>
        function UserPostItemMock() {
            return <div />;
        }
);

describe('UserPosts component', () => {
    it('UserPosts render', () => {
        render(<UserPosts />);
        expect(screen.getByTestId('userPosts')).toBeInTheDocument();
    });
});
