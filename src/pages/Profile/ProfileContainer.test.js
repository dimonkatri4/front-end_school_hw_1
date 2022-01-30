import React from 'react';
import {render} from '@testing-library/react';
import {ProfileContainer} from "./ProfileContainer";
import * as ReactRouter from 'react-router-dom'
import {createMemoryHistory} from "history";
import {Router} from "react-router";
import { useHistory } from "react-router-dom";
import routeData from 'react-router';


jest.mock('./Profile', () => {
    return function ProfileMock() {
        return <div></div>
    }
})

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        userId: 10,
    }),
}));

jest.mock('../../store/users-reducer');
jest.mock('../../store/trending-reducer');

describe('ProfileContainer component', () => {
    const requestUsersInfoMock = jest.fn();
    const requestTrendingFeed = jest.fn();
    it('requestTrendingFeed must be called once when rendering a component', () => {
        render(<ProfileContainer requestUsersInfo={requestUsersInfoMock}
                                 requestTrendingFeed={requestTrendingFeed}
                                 pageSize={6}
        />)
        expect(requestTrendingFeed).toBeCalledTimes(1);
    });

    it('requestUsersInfo must be called once with parameter 10', () => {
        render(
            <ProfileContainer requestUsersInfo={requestUsersInfoMock}
                                  requestTrendingFeed={requestTrendingFeed}
                                  pageSize={6}
                />)
        expect(requestUsersInfoMock).toBeCalledTimes(1);
        expect(requestUsersInfoMock).toHaveBeenNthCalledWith(1, 10)
    });

})