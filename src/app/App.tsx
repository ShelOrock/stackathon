import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";

import AppRouter from "../router/Router";
import { entityActions } from "../redux/actions";
import { AppData, DefaultLabels } from "../enums";
import { AppDataSelectors } from "../redux/selectors";

const DEFAULT_FLOOR_NUMBER = 1;
const DEFAULT_FLOOR = {
  id: DEFAULT_FLOOR_NUMBER,
  label: `${ DefaultLabels.UntitledFloor } ${ DEFAULT_FLOOR_NUMBER }`,
  isHighlighted: false,
  isHidden: false
};

const App = () => {
  const dispatch = useAppDispatch();

  // read only the length so the effect only depends on a stable primitive
  const floorIds = useAppSelector(state => AppDataSelectors.selectAppDataIds(state, AppData.Floors));
  const floorCount = floorIds ? floorIds.length : 0;

  useEffect(() => {
    if (floorCount === 0) {
      dispatch(entityActions.addEntity(AppData.Floors, DEFAULT_FLOOR));
      dispatch(entityActions.setActiveId(AppData.Floors, DEFAULT_FLOOR_NUMBER));
    }
  }, [dispatch, floorCount]);

  return <AppRouter />;
};

export default App;
