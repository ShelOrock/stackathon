import React from 'react';

import Row from '../Row';
import { LinkButton } from '../StyledComponents/StyledButton';
import Button from '../Button';
import { entityActions } from '../../redux/actions';
import { AppData, Styles } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ComponentMapping from '../ComponentMapping';
import { AppDataSelectors } from '../../redux/selectors';
import LayerGroup from './LayerGroup';
import Paper from '../Paper';
import Column from '../Column';

const LayerPanel = () => {

  const dispatch = useAppDispatch();

  const handleResetPlanner = () => {
    dispatch(entityActions.resetEntities(AppData.Floors));
    dispatch(entityActions.resetActiveId(AppData.Floors));
    dispatch(entityActions.resetEntities(AppData.Rooms));
    dispatch(entityActions.resetEntities(AppData.Doors));
    dispatch(entityActions.resetEntities(AppData.Windows));
  };

  const floors = useAppSelector(AppDataSelectors.selectAppData(AppData.Floors, {
    attributes: [ "id", "isHidden" ]
  }));
  const activeFloor = useAppSelector(AppDataSelectors.selectActiveAppData(AppData.Floors, {
    attributes: [ "id" ]
  }));

  return (
    <Column alignItems={ Styles.AlignItems.stretch }>
      <Paper
        $mt={ Styles.Spacings.sm }
        $padding={ Styles.Spacings.sm }
      >
        <Row alignItems={ Styles.AlignItems.center }>
          <LinkButton to='/3D'>Build it</LinkButton>
          <Button
            onClick={ handleResetPlanner }
            variant={ Styles.ButtonVariants.tertiary }
            color={ Styles.Colors.red }
            $mt={ Styles.Spacings.xs }
            $pt={ Styles.Spacings.xs } $pr={ Styles.Spacings.md } $pb={ Styles.Spacings.xs } $pl={ Styles.Spacings.md }
          >Reset</Button>
        </Row>
      </Paper>
      <Paper
        $mt={ Styles.Spacings.sm }
        $padding={ Styles.Spacings.sm }
      >
        <ComponentMapping
          componentData={ floors }
          renderComponent={ floor => (
            <LayerGroup
              activeFloorId={ activeFloor.id }
              { ...floor }
            />
          )}
        />
      </Paper>
    </Column>
  );
};

export default LayerPanel;