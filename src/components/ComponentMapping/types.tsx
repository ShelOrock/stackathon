import React from "react";

interface ComponentProps<Data> {
  componentData: Data[]
  renderComponent: (componentData: Data) => React.ReactNode;
};

export { ComponentProps };
