import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ReviewTab from '../App/Components/ReviewTab';

test('renders correctly', () => {
    const tree = renderer.create(<ReviewTab darkMode={false} />).toJSON();
    expect(tree).toMatchSnapshot();
});