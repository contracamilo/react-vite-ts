import React, {
  createContext,
  useReducer,
  Dispatch,
  ReactElement,
} from "react";

type State = {
  itemCount: number;
};

type Action = { type: string; payload: number };

export const AppContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

const initialState: State = {
  itemCount: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "DEFAULT":
      return { ...state };
    case "UPDATE_ITEM_COUNT":
      return { ...state, itemCount: action.payload };
    default:
      return state;
  }
};

interface AppContextProviderProps {
  children: ReactElement;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
