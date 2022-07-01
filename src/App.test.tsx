import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

jest.mock(
    './pages/Profile/ProfileContainer',
    () => function ProfileContainerMock() {
        return <div/>
    }
)

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const linkElement = screen.getByText(/tik-tuk/i);
    expect(linkElement).toBeInTheDocument();
});
