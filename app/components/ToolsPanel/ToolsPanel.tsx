import React from 'react';

import Column from '../Column';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { functions } from '../../utilities';
import { AppDataSelectors } from '../../redux/selectors';
import { AppData, CanvasSizes, Directions, UIData, Styles, DefaultLabels } from '../../enums';
import { entityActions } from '../../redux/actions';
import { setCanvasSize } from '../../redux/canvasSize/actions';
import Row from '../Row';
import { toggleElementsActions } from '../../redux/actions';
import Paper from '../Paper';

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

  const handleCreateEntity = (appDataType, {
    entities,
    defaultEntity,
    defaultLabel,
  }): void => {
    const id = functions.findMissingId(entities);

    dispatch(entityActions.addEntity(appDataType, {
      id,
      label: `${ defaultLabel } ${ id }`,
      floor: activeFloor.id,
      ...defaultEntity
    }));
  };

  const handleCreateFloor = () => {
    const id = functions.findMissingId(floors);

    dispatch(entityActions.addEntity(AppData.Floors, {
      id,
      label: `${ DefaultLabels.UntitledFloor } ${ id }`,
      floor: activeFloor.id,
      ...DEFAULT_FLOOR
    }));
    dispatch(entityActions.setActiveId(AppData.Floors, id));
  };

  return (
    <Paper
      $mt={ Styles.Spacings.sm }
      $padding={ Styles.Spacings.sm }
    >
      <Column>
        <Button
          onClick={ () => handleToggleElement(UIData.Grid, !gridIsShowing) }
          variant={ Styles.ButtonVariants.primary }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >Toggle Grid</Button>
        <Button
          onClick={ () => handleToggleElement(UIData.ElementActions, !elementActionsIsShowing) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >Toggle HUD</Button>
        <Button
          onClick={ () => handleToggleElement(UIData.ElementLabels, !elementLabelsIsShowing) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >Toggle Labels</Button>
        <Row $mt={ Styles.Spacings.sm }>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSizes.small)) }
            $mr={ Styles.Spacings.xs }
            $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
          >Small</Button>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSizes.medium)) }
            $mr={ Styles.Spacings.xs }
            $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
          >Medium</Button>
          <Button
            onClick={ () => dispatch(setCanvasSize(CanvasSizes.large)) }
            $mr={ Styles.Spacings.xs }
            $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
          >Large</Button>
        </Row>
      </Column>
      <Column $mt={ Styles.Spacings.sm }>
        <Button
          onClick={ handleCreateFloor }
          variant={ Styles.ButtonVariants.primary }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Add Floor</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Rooms, {
            entities: rooms,
            defaultEntity: DEFAULT_ROOM,
            defaultLabel: DefaultLabels.UntitledRoom,
          }) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Create a new room</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Doors, {
            entities: doors,
            defaultEntity: DEFAULT_DOOR,
            defaultLabel: DefaultLabels.UntitledDoor,
          }) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Create new door</Button>
        <Button
          onClick={ () => handleCreateEntity(AppData.Windows, {
            entities: windows,
            defaultEntity: DEFAULT_WINDOW,
            defaultLabel: DefaultLabels.UntitledWindow,
          }) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Create new Window</Button>
      </Column>
    </Paper>
  );
};

export default ToolsPanel;
