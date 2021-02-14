import ColorBox from "./components/ColorBox";
import React from "react";
import ColorContext, {ColorProvider} from "./contexts/color";
import SelectColors from "./components/SelectColors";

function App() {
  return (
      <ColorProvider>
          <div>
              <SelectColors/>
              <ColorBox/>
          </div>
      </ColorProvider>
  );
}

export default App;
