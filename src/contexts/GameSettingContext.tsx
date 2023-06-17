import React, { useState, createContext, Dispatch, SetStateAction, ReactNode } from 'react';
import { TileColor } from '@/types';

type State = {
  tileColor: TileColor;
};

type GameSettingContextType = {
  gameSetting: State;
  setGameSetting: Dispatch<SetStateAction<State>>;
}

type GameSettingProviderProps = {
  children: ReactNode;
}

export const initialGameSetting: State = {
  tileColor: 'm',
};

export const GameSettingContext = createContext<GameSettingContextType>({
  gameSetting: initialGameSetting,
  setGameSetting: () => {}
});

export const GameSettingProvider: React.FC<GameSettingProviderProps> = ({ children }) => {
  const [gameSetting, setGameSetting] = useState(initialGameSetting);

  return (
    <GameSettingContext.Provider value={{ gameSetting, setGameSetting }}>
      {children}
    </GameSettingContext.Provider>
  );
};
