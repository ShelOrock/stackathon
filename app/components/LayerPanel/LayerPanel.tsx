import React from 'react';

import Column from '../Column';
import Row from '../Row';
import { LinkButton } from '../StyledComponents/StyledButton';
import Button from '../Button';
import { resetActiveId, resetEntities } from '../../redux/entities/actions';
import { AppData } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ComponentMapping from '../ComponentMapping';
import { AppDataSelectors } from '../../redux/selectors';
import LayerGroup from './LayerGroup';

const LayerPanel = () => {

  const dispatch = useAppDispatch();

  const handleResetPlanner = () => {
    dispatch(resetEntities(AppData.Floors));
    dispatch(resetActiveId(AppData.Floors));
    dispatch(resetEntities(AppData.Rooms));
    dispatch(resetEntities(AppData.Doors));
    dispatch(resetEntities(AppData.Windows));
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