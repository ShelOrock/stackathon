import React from 'react';

import Column from '../Column';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { functions } from '../../utilities';
import { AppDataSelectors } from '../../redux/selectors';
import { AppData, Directions, UIData } from '../../enums';
import { addEntity, setActiveId } from '../../redux/entities/actions';
import { setCanvasSize } from '../../redux/canvasSize/actions';
import Row from '../Row';
import { toggleElementsActions } from '../../redux/actions';

enum CanvasSize {
  small = 300,
  medium = 400,
  large = 600
};

const BLUE_TAG = "blue";
enum DefaultEntityPositions {
  xPosition = 0,
  yPosition = 0
};

enum DefaultRoomDimensions {
  width = 100,
  height = 100
};
const DEFAULT_ROOM_Z_AXIS = 2;

enum DefaultDoorDimensions {
  width = 25,
  height = 12
};

enum DefaultWindowDimensions {
  width = 25,
  height = 2
};

const DEFAULT_FLOOR = {
  isHighlighted: false,
  isHidden: false
};

const DEFAULT_ROOM = {
  width: DefaultRoomDimensions.width,
  height: DefaultRoomDimensions.height,
  zAxis: DEFAULT_ROOM_Z_AXIS,
  xPosition: DefaultEntityPositions.xPosition,
  yPosition: DefaultEntityPositions.yPosition,
  isHighlighted: false,
  isLocked: false,
  isHidden: false,
  tag: BLUE_TAG,
};

const DEFAULT_DOOR = {
  width: DefaultDoorDimensions.width,
  height: DefaultDoorDimensions.height,
  xPosition: DefaultEntityPositions.xPosition,
  yPosition: DefaultEntityPositions.yPosition,
  orientation: Directions.EAST_WEST,
  isHighlighted: false,
  isLocked: false,
  isHidden: false,
  tag: BLUE_TAG
};

const DEFAULT_WINDOW = {
  width: DefaultWindowDimensions.width,
  height: DefaultWindowDimensions.height,
  xPosition: DefaultEntityPositions.xPosition,
  yPosition: DefaultEntityPositions.yPosition,
  orientation: Directions.EAST_WEST,
  isHighlighted: false,
  isLocked: false,
  isHidden: false,
  tag: BLUE_TAG,
};

export default () => {

  const dispatch = useAppDispatch();

  const gridIsShowing = useAppSelector(state => state.toggleElements.grid.isShowing);
  const elementActionsIsShowing = useAppSelector(state => state.toggleElements.elementActions.isShowing);
  const elementLabelsIsShowing = useAppSelector(state => state.toggleElements.elementLabels.isShowing);

  const handleToggleElement = (uiDataType, toggle) => {
    dispatch(toggleElementsActions.setToggleElement(uiDataType, toggle));
  }

  const floors = useAppSelector(AppDataSelectors.selectAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));
  const rooms = useAppSelector(AppDataSelectors.selectAppData(AppData.Rooms, {
    attributes: [ "id" ]
  } ));
  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    attributes: [ "id" ]
  } ));
  const windows = useAppSelector(AppDataSelectors.selectAppData(AppData.Windows, {
    attributes: [ "id" ]
  }));
  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  const handleCreateEntity = (appDataType, entities, defaultEntity): void => {
    const id = functions.findMissingId(entities);

    dispatch(addEntity(appDataType, {
      id,
      label: `${ appDataType } ${ id }`,
      floor: activeFloor.id,
      ...defaultEntity
    }));
  };

  const handleCreateFloor = () => {
    const id = functions.findMissingId(floors);

    dispatch(addEntity(AppData.Floors, {
      id,
      label: `Floor ${ id }`,
      floor: activeFloor.id,
      ...DEFAULT_FLOOR
    }));
    dispatch(setActiveId(AppData.Floors, id));
  };

  return (
    <Column>
      <Column>
        <Button
          onClick={ () => handleToggleElement(UIData.Grid, !gridIsShowing) }
          variant="primary"
        >Toggle Grid</Button>
        <Button
          onClick={ () => handleToggleElement(UIData.ElementActions, !elementActionsIsShowing) }
        >Toggle HUD</Button>
        <Button onClick={ () => handleToggleElement(UIData.ElementLabels, !elementLabelsIsShowing) }>Toggle Labels</Button>
        <Row>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSize.small)) }
          >Small</Button>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSize.medium)) }
          >Medium</Button>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSize.large)) }
          >Large</Button>
        </Row>
      </Column>
      <Column>
        <Button
          onClick={ handleCreateFloor }
          variant="primary"
        >+ Add Floor</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Rooms, rooms, DEFAULT_ROOM) }
        >+ Create a new room</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Doors, doors, DEFAULT_DOOR) }
        >+ Create new door</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Windows, windows, DEFAULT_WINDOW) }
        >+ Create new Window</Button>
      </Column>
    </Column>
  );
};