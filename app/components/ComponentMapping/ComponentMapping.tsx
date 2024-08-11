import React from "react";

import { ComponentProps } from "./types";

const ComponentMapping: React.FC<ComponentProps<any>> = ({ componentData, renderComponent }) => (
  <>
    { componentData.map(component => <React.Fragment key={ component.id }>{ renderComponent(component) }</React.Fragment>) }
  </>
);

export default ComponentMapping;