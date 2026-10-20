const useIndexData = (items: unknown[] = [], itemKey: string) => {

  const indexedData = items.map((item, index) => ({
    id: index,
    [itemKey]: item
  }));

  return { indexedData };
};

export default useIndexData;
