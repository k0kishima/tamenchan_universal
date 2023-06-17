import React from "react";
import { GameSettingProvider } from "@/contexts/GameSettingContext";
import { AppNavigator } from "./AppNavigator";

export default function App() {
  return (
    <GameSettingProvider>
      <AppNavigator />
    </GameSettingProvider>
  );
}
