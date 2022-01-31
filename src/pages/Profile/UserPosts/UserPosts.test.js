import { render, screen } from '@testing-library/react';
import React from 'react';
import UserPosts from './UserPosts';

const trending = [
    { trend1: {}, id: 1 },
    { trend2: {}, id: 2 },
    { trend3: {}, id: 3 },
];
const pageSize = 6;

jest.mock(
    './UserPostItem',
    () =>
        function UserPostItemMock() {
            return <div />;
        }
);

describe('UserPosts component', () => {
    it('UserPosts render', () => {
        render(<UserPosts trending={trending} pageSize={pageSize} />);
        expect(screen.getByTestId('userPosts')).toBeInTheDocument();
    });
});
