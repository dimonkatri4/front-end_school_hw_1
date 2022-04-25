import { render, screen } from '@testing-library/react';
import React from 'react';
import UserPosts from './UserPosts';
import {trendingTestData} from "../../../mocks/testData";

const trending = trendingTestData;
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
