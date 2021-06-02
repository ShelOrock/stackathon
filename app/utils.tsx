import * as React from 'react';
const { createContext } = React;
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import store from './redux/store';

import {
  RootState,
  RoomTypes,
  RoomsType,
  DoorTypes,
  DoorsType,
  WindowTypes,
  WindowsType
} from './types';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const sortArray = (array: number[]): void => {
  array.length && array.sort((a: number, b: number) => a - b);
};

export const findMissingIndex = (array: RoomsType | DoorsType | WindowsType): number => {

  const arrayIndexes = array.map((item: RoomTypes | DoorTypes | WindowTypes) => item.index);
    
  let result: number = 0;
  sortArray(arrayIndexes);

  if(!array.length || !arrayIndexes.includes(0)) {
    return result;
  };

  arrayIndexes.forEach((_roomIndex: number, idx: number) => {
    if(arrayIndexes[idx + 1]) {
      if(arrayIndexes[idx + 1] - arrayIndexes[idx] > 1) {
        result = arrayIndexes[idx] + 1;
      };
    };
  });

  if(!result) {
    result = arrayIndexes[array.length - 1] + 1
  }
    
  return result;
};