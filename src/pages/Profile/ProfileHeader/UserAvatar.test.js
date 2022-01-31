import React from 'react';
import { render, screen } from '@testing-library/react';
import UserAvatar from './UserAvatar';

const avatar = 'src avatar';

describe('UserAvatar component', () => {
    it('UserAvatar render', () => {
        render(<UserAvatar avatar={avatar} />);
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });
});
