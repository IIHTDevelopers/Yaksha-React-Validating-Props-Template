import React from 'react';
import { render } from '@testing-library/react';
import UserProfileCard from '../../components/UserProfileCard';
import '@testing-library/jest-dom';

describe('boundary', () => {
    test('UserProfileCardComponent boundary renders UserProfileCard component with username, avatar, and bio', () => {
        const { getByText, getByAltText } = render(
            <UserProfileCard
                username="JohnDoe"
                avatar="https://randomuser.me/api/portraits/men/1.jpg"
                bio="A passionate React developer."
            />
        );

        expect(getByText('JohnDoe')).toBeInTheDocument();
        expect(getByAltText("JohnDoe's avatar")).toBeInTheDocument();
        expect(getByText('A passionate React developer.')).toBeInTheDocument();
    });

    test('UserProfileCardComponent boundary renders UserProfileCard component with default bio when bio is not provided', () => {
        const { getByText, getByAltText } = render(
            <UserProfileCard
                username="Alice"
                avatar="https://randomuser.me/api/portraits/women/2.jpg"
            />
        );

        expect(getByText('Alice')).toBeInTheDocument();
        expect(getByAltText("Alice's avatar")).toBeInTheDocument();
        expect(getByText('No bio available')).toBeInTheDocument();
    });

    test('UserProfileCardComponent boundary applies propTypes validation', () => {
        console.error = jest.fn(); // Suppress error messages in the console

        render(
            <UserProfileCard
                username={12345} // Invalid prop type
                avatar="https://randomuser.me/api/portraits/men/1.jpg"
                bio="A passionate React developer."
            />
        );

        expect(console.error).toHaveBeenCalled();
    });

    test('UserProfileCardComponent boundary does not apply propTypes validation when correct props are passed', () => {
        console.error = jest.fn(); // Suppress error messages in the console

        render(
            <UserProfileCard
                username="JaneDoe"
                avatar="https://randomuser.me/api/portraits/women/1.jpg"
                bio="Front-end enthusiast."
            />
        );

        expect(console.error).not.toHaveBeenCalled();
    });
});
