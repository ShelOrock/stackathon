import React from 'react';

import Column from '../Column';
import Row from '../Row';
import { LinkButton } from '../StyledComponents/StyledButton';
import Button from '../Button';
import { entityActions } from '../../redux/actions';
import { AppData } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ComponentMapping from '../ComponentMapping';
import { AppDataSelectors } from '../../redux/selectors';
import LayerGroup from './LayerGroup';
import { SpacingPropTypes } from '../../types/styles';

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
    <Column>
      <Row>
        <LinkButton to='/3D'>Build it</LinkButton>
        <Button
          onClick={ handleResetPlanner }
          variant="tertiary"
          color="red"
          $mt={ SpacingPropTypes.xs }
          $pt={ SpacingPropTypes.xs } $pr={ SpacingPropTypes.md } $pb={ SpacingPropTypes.xs } $pl={ SpacingPropTypes.md }
        >Reset</Button>
      </Row>
      <ComponentMapping
        componentData={ floors }
        renderComponent={ floor => (
          <LayerGroup
            activeFloorId={ activeFloor.id }
            { ...floor }
          />
         )}
      />
    </Column>
  );
};

export default LayerPanel;