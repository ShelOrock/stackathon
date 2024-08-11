import React from "react";

interface ComponentProps<Data> {
  componentData: Data[]
  renderComponent: (Data) => React.ReactNode;
};

export { ComponentProps };
