import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LearnWord from '../App/Components/LearnWord';

test('renders correctly', () => {
    const tree = renderer.create(
        <LearnWord />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});