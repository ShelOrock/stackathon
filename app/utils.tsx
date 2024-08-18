import {
  RoomTypes,
  RoomsType,
  DoorTypes,
  DoorsType,
  WindowTypes,
  WindowsType
} from './types';

export const sortArray = (array: number[] = []): void => {
  array.sort((a: number, b: number) => a - b);
};

export const findMissingId = (array: RoomsType | DoorsType | WindowsType = []): number => {

  const arrayIds = array.map((item: RoomTypes | DoorTypes | WindowTypes) => item.id);
    console.log(arrayIds)
  let result: number = 0;
  sortArray(arrayIds);

  if(!arrayIds.includes(0)) {
    return result;
  };

  arrayIds.forEach((_roomIndex: number, index: number) => {
    if(arrayIds[index + 1]) {
      if(arrayIds[index + 1] - arrayIds[index] > 1) {
        result = arrayIds[index] + 1;
      };
    };
  });

  if(!result) {
    result = arrayIds[array.length - 1] + 1
  }
    console.log({ result })
  return result;
};