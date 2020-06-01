import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SettingTab from '../App/Components/SettingTab';

test('renders correctly', () => {
    const tree = renderer.create(<SettingTab darkMode={false} />).toJSON();
    expect(tree).toMatchSnapshot();
});