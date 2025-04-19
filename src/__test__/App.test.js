import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('boundary', () => {
  test('AppComponent boundary renders App component with three UserProfileCard components', () => {
    const { getByText, getAllByAltText } = render(<App />);
    
    // Check for the presence of user names
    expect(getByText('JohnDoe')).toBeInTheDocument();
    expect(getByText('JaneSmith')).toBeInTheDocument();
    expect(getByText('Alice')).toBeInTheDocument();
    
    // Check for the presence of avatars
    expect(getAllByAltText('JohnDoe\'s avatar')).toHaveLength(1);
    expect(getAllByAltText('JaneSmith\'s avatar')).toHaveLength(1);
    expect(getAllByAltText('Alice\'s avatar')).toHaveLength(1);
    
    // Check for the presence of bios
    expect(getByText('A passionate React developer.')).toBeInTheDocument();
    expect(getByText('Front-end enthusiast.')).toBeInTheDocument();
  });

  test('AppComponent boundary renders default bio for UserProfileCard component without bio prop', () => {
    const { getByText } = render(<App />);
    
    // Check for the presence of the default bio
    expect(getByText('No bio available')).toBeInTheDocument();
  });
});
