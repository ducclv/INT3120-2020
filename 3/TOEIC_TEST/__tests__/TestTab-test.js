import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TestTab from '../App/Components/TestTab';

test('renders correctly', () => {
    const tree = renderer.create(<TestTab darkMode={false} />).toJSON();
    expect(tree).toMatchSnapshot();
});