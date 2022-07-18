import { createContext, useState } from "react";
import { IChildrenProp, IContextProps } from "../IModels";

const StateContext = createContext<IContextProps>({
  isLoading: false,
  setIsLoading: () => {},
});

export function StateContextProvider(props: IChildrenProp) {
  const [isLoading, setIsLoading] = useState(false);

  const context = {
    isLoading,
    setIsLoading,
  };

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  );
}

export default StateContext;
