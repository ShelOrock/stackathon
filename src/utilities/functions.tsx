const sortArray = (array: number[] = []): void => {
  array.sort((a: number, b: number) => a - b);
};

const findDifference = (a: number, b: number) => a - b;

const findMissingId = (array = []): number => {

  const arrayIds = array.map((item: { id: number }) => item.id);

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

const snapCoordinateToGrid = (deltaCoordinate: number, gridSnap: number) => {
  return Math.round(deltaCoordinate / gridSnap) * gridSnap;
};

export { 
  sortArray,
  findMissingId,
  snapCoordinateToGrid
};
