import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../Error';

const errorProp = 'Some error';

describe('Error component', () => {
    it('Error component render', () => {
        render(<Error errors={null} />);
        expect(screen.getByTestId('error')).toBeInTheDocument();
    });
    it('render component when prop errors not null', () => {
        render(<Error errors={errorProp} />);
        expect(screen.getByTestId('error')).toBeInTheDocument();
        expect(screen.getByText(errorProp)).toBeInTheDocument();
    });
});
