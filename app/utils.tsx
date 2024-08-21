import {
  RoomsType,
  DoorsType,
  WindowsType
} from './types';

export const sortArray = (array: number[] = []): void => {
  array.sort((a: number, b: number) => a - b);
};

const findDifference = (a, b) => a - b;

export const findMissingId = (array: RoomsType | DoorsType | WindowsType = []): number => {

  const arrayIds = array.map(item => item.id);

  let result: number = 0;
  sortArray(arrayIds);

  if(!arrayIds.includes(1)) {
    return result + 1;
  };

  arrayIds.every((_id: number, index) => {
    const currentIndex = arrayIds[index];
    const nextIndex = arrayIds[index + 1];

    if(nextIndex) {
      if(findDifference(nextIndex, currentIndex) > 1) {
        result = currentIndex;
        return false;
      };
    };

    return true;
  });

  if(!result) {
    result = arrayIds.length;
  };

  return result + 1;
};