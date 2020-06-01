import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LearnTab from '../App/Components/LearnTab';

test('renders correctly', () => {
    const tree = renderer.create(<LearnTab darkMode={false} />).toJSON();
    expect(tree).toMatchSnapshot();
});