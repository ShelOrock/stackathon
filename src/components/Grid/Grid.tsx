import React from "react";
import { Line } from "react-konva";

import { useIndexData } from "../../hooks";

import ComponentMapping from "../ComponentMapping";

import { ComponentPropTypes } from "./types";

const Grid: React.FC<ComponentPropTypes> = ({ canvasSize }) => {

  const DIVISION_SIZE = 25;

  const gridArray = [...Array(canvasSize / DIVISION_SIZE).keys()];

  const { indexedData: indexedGridArray } = useIndexData(gridArray, "gridLine");

  return (
    <>
      <ComponentMapping
        componentData={ indexedGridArray }
        renderComponent={ ({ gridLine }) => (
          <Line
            points={[ 0, gridLine * DIVISION_SIZE, 600, gridLine * DIVISION_SIZE ]}
            strokeWidth={ gridLine % 4 === 0 ? 2 : 1 }
            stroke="lightgray"
          />
        ) }
      />
      <ComponentMapping
        componentData={ indexedGridArray }
        renderComponent={ ({ gridLine }) => (
          <Line
            points={[ gridLine * DIVISION_SIZE, 0, gridLine * DIVISION_SIZE, 600 ]}
            strokeWidth={ gridLine % 4 === 0 ? 2 : 1 }
            stroke="lightgray"
          />
        ) }
      />
    </>
  );
};

export default Grid;
