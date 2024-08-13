const useIndexData = (items = [], itemKey) => {

  const indexedData = items.map((item, index) => ({
    id: index,
    [itemKey]: item
  }));

  return { indexedData };
};

export default useIndexData;
