import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './index';
import styles from './styles';
test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot();
});
test('should render title correctly', () => {
  const testTitle = 'test title';
  const comp = render(<Button title={testTitle} />);
  const buttonText = comp.getByTestId('button-title').children[0];
  expect(buttonText).toBe(testTitle);
});
test('should trigger onPress', () => {
  const mockFunction = jest.fn();
  const comp = render(<Button onClick={mockFunction} />);
  const buttonTouchable = comp.getByTestId('button-touchable');

  fireEvent(buttonTouchable, 'press');

  expect(mockFunction).toBeCalled();
});
test('should render default theme styling', () => {
  const comp = render(<Button />);
  const buttonStyle = comp.getByTestId('button-touchable').props.style;
  expect(buttonStyle).toMatchObject(styles.primary.container);
});
test('should render given theme styling', () => {
  const theme = ['primary', 'secondary'];
  theme.forEach(theme => {
    const comp = render(<Button theme={theme} />);
    const buttonStyle = comp.getByTestId('button-touchable').props.style;
    expect(buttonStyle).toMatchObject(styles[theme].container);
  });
});
