// context/StarsCanvasContext.tsx

import { createContext, useContext, useState, ReactNode } from "react";

const StarsCanvasContext = createContext<boolean>(true);

export const StarsCanvasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showStarsCanvas, setShowStarsCanvas] = useState(true);

  return (
    <StarsCanvasContext.Provider value={showStarsCanvas}>
      {children}
    </StarsCanvasContext.Provider>
  );
};

export const useStarsCanvas = () => useContext(StarsCanvasContext);
