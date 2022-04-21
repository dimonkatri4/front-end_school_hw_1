import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';

const profile = {
    nickname: 'User nickname',
    signature: 'Signature',
    relation: '10',
    duetSetting: '20',
    stitchSetting: '30',
};

describe('UserInfo component', () => {
    it('UserInfo render', () => {
        render(<UserInfo profile={profile} />);
        expect(screen.getByTestId('userInfo')).toBeInTheDocument();
        expect(screen.getByTestId('userInfo')).toHaveClass('userInfo');
        expect(screen.getByText(/following/i)).toBeInTheDocument();
    });
    it('props must be passed and display', () => {
        render(<UserInfo profile={profile} />);
        expect(screen.getByText(profile.nickname)).toBeInTheDocument();
        expect(screen.getByText(profile.signature)).toBeInTheDocument();
        expect(screen.getByText(profile.relation)).toBeInTheDocument();
        expect(screen.getByText(profile.duetSetting)).toBeInTheDocument();
        expect(screen.getByText(profile.stitchSetting)).toBeInTheDocument();
    });
});
