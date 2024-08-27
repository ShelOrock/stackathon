import React from 'react';

import Column from '../Column';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { functions } from '../../utilities';
import { AppDataSelectors } from '../../redux/selectors';
import { AppData, CanvasSize, Directions, UIData } from '../../enums';
import { entityActions } from '../../redux/actions';
import { setCanvasSize } from '../../redux/canvasSize/actions';
import Row from '../Row';
import { toggleElementsActions } from '../../redux/actions';
import { SpacingPropTypes } from '../../types/styles';

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

const ToolsPanel = () => {

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

    dispatch(entityActions.addEntity(appDataType, {
      id,
      label: `${ appDataType } ${ id }`,
      floor: activeFloor.id,
      ...defaultEntity
    }));
  };

  const handleCreateFloor = () => {
    const id = functions.findMissingId(floors);

    dispatch(entityActions.addEntity(AppData.Floors, {
      id,
      label: `Floor ${ id }`,
      floor: activeFloor.id,
      ...DEFAULT_FLOOR
    }));
    dispatch(entityActions.setActiveId(AppData.Floors, id));
  };

  return (
    <Column>
      <Column>
        <Button
          onClick={ () => handleToggleElement(UIData.Grid, !gridIsShowing) }
          variant="primary"
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        >Toggle Grid</Button>
        <Button
          onClick={ () => handleToggleElement(UIData.ElementActions, !elementActionsIsShowing) }
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        >Toggle HUD</Button>
        <Button
          onClick={ () => handleToggleElement(UIData.ElementLabels, !elementLabelsIsShowing) }
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        >Toggle Labels</Button>
        <Row $mt={ SpacingPropTypes.sm }>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSize.small)) }
            $mr={ SpacingPropTypes.xs }
            $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
          >Small</Button>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSize.medium)) }
            $mr={ SpacingPropTypes.xs }
            $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
          >Medium</Button>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSize.large)) }
            $mr={ SpacingPropTypes.xs }
            $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
          >Large</Button>
        </Row>
      </Column>
      <Column $mt={ SpacingPropTypes.sm }>
        <Button
          onClick={ handleCreateFloor }
          variant="primary"
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        >+ Add Floor</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Rooms, rooms, DEFAULT_ROOM) }
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        >+ Create a new room</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Doors, doors, DEFAULT_DOOR) }
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        >+ Create new door</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Windows, windows, DEFAULT_WINDOW) }
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.sm } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.sm }
        >+ Create new Window</Button>
      </Column>
    </Column>
  );
};

export default ToolsPanel;
