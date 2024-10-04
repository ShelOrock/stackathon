import React from "react";

import Column from "../Column";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { functions } from "../../utilities";
import { AppDataSelectors } from "../../redux/selectors";
import { AppData, CanvasSizes, UIData, Styles, DefaultLabels } from "../../enums";
import { entityActions, selectedEntityActions } from "../../redux/actions";
import { setCanvasSize } from "../../redux/canvasSize/actions";
import Row from "../Row";
import { toggleElementsActions } from "../../redux/actions";
import Paper from "../Paper";

const DEFAULT_FLOOR = {
  isHighlighted: false,
  isHidden: false
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
  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  const handleSetEntityPreview = (appDataType) => {
    dispatch(selectedEntityActions.setSelectedEntity(appDataType));
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
          onClick={ () => handleSetEntityPreview(AppData.Rooms) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Create a new room</Button>
        <Button
          onClick={ () => handleSetEntityPreview(AppData.Doors) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Create new door</Button>
        <Button
          onClick={ () => handleSetEntityPreview(AppData.Windows) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Create new Window</Button>
        <Button
          onClick={ () => handleSetEntityPreview(AppData.Roofs) }
          $mt={ Styles.Spacings.xs }
          $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.sm } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.sm }
        >+ Create new Roof</Button>
      </Column>
    </Paper>
  );
};

export default ToolsPanel;
