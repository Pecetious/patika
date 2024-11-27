import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import App from './App';

test('should match with snapshot', () => {
  const comp = render(<App />);
  expect(comp).toMatchSnapshot();
});

test('should add item to list', () => {
  const testText = 'This is a test item';
  const comp = render(<App />);

  const itemInput = comp.getByTestId('item-input');
  fireEvent.changeText(itemInput, testText);

  const itemButton = comp.getByTestId('button-touchable');
  fireEvent.press(itemButton);

  const itemList = comp.getByTestId('item-list').props.data;
  expect(itemList.length).toBe(1);
});

test('should add multiple items', () => {
  const testItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];
  const comp = render(<App />);
  testItems.forEach(testText => {
    const itemInput = comp.getByTestId('item-input');
    fireEvent.changeText(itemInput, testText);
    const itemButton = comp.getByTestId('button-touchable');
    fireEvent.press(itemButton);
  });
  const itemList = comp.getByTestId('item-list').props.data;
  expect(itemList.length).toBe(testItems.length);
});

test('should not add item if input area is empty', () => {
  const comp = render(<App />);
  const itemButton = comp.getByTestId('button-touchable');
  fireEvent.press(itemButton);

  const itemList = comp.getByTestId('item-list').props.data;
  expect(itemList.length).toBe(0);
});
