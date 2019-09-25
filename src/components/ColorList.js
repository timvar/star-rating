import React from "react";
import Color from "./Color";
import { useColors } from "../hooks/color-hooks";

export default function ColorList() {
  const { colors } = useColors();
  return (
    <div className="color-list">
      {colors.length === 0 ? (
        <p>No Colors Listed. (Add a Color)</p>
      ) : (
        colors.map(color => (
          <Color
            key={color.id}
            {...color}
          />
        ))
      )}
    </div>
  );
}

/*
// ColorList using Context consumer

export default function ColorList() {
  return (
    <ColorContext.Consumer>
      {context => {
        return (
          <div className="color-list">
            {context.colors.length === 0 ? (
              <p>No Colors Listed. (Add a Color)</p>
            ) : (
              context.colors.map(color => <Color key={color.id} {...color} />)
            )}
          </div>
        )
      }}
    </ColorContext.Consumer>
  )
}

*/