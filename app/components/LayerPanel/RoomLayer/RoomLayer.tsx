import React from "react";

import Column from "../../Column";

import { ComponentPropTypes } from "./types";
import EntityLayer from "../EntityLayer";
import { AppData, Styles } from "../../../enums";
import ComponentMapping from "../../ComponentMapping";
import { useAppSelector } from "../../../hooks";
import { AppDataSelectors } from "../../../redux/selectors";

const RoomLayer: React.FC<ComponentPropTypes> = ({
  id, 
  label,
  isHidden,
  isDisabled,
  isLocked,
  isHighlighted,
  activeFloorId,
  tag,
  handleDeleteRoom
}) => {

  const doors = useAppSelector(AppDataSelectors.selectAppData(AppData.Doors, {
    filters: { room: id }
  }));

  return (
    <Column $mt={ Styles.Spacings.sm }>
      <EntityLayer
        appDataType={ AppData.Rooms }
        id={ id }
        label={ label }
        isHighlighted={ isHighlighted }
        isLocked={ isLocked }
        isHidden={ isHidden }
        tag={ tag }
      />
      <Column $ml={ Styles.Spacings.sm }>
        <ComponentMapping
          componentData={ doors }
          renderComponent={ door => (
            <EntityLayer
              appDataType={ AppData.Doors }
              { ...door }
            />
          ) }
        />
      </Column>
    </Column>
  )
};

export default RoomLayer;
