import React, { useEffect } from "react";

import { useAppDispatch } from "./hooks";

import AppRouter from "./router/Router";
import { entityActions } from "./redux/actions";
import { AppData, DefaultLabels } from "./enums";

const App = () => {

  const DEFAULT_FLOOR_NUMBER = 1;
  const DEFAULT_FLOOR = {
    id: DEFAULT_FLOOR_NUMBER,
    label: `${ DefaultLabels.UntitledFloor } ${ DEFAULT_FLOOR_NUMBER }`,
    isHighlighted: false,
    isHidden: false
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(entityActions.addEntity(AppData.Floors, DEFAULT_FLOOR));
    dispatch(entityActions.setActiveId(AppData.Floors, DEFAULT_FLOOR_NUMBER));
  }, []);

  return (
    <AppRouter />
  );
};

export default App;
