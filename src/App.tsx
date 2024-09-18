import React from "react";
import { DialogProvider } from "./context/DialogContext";
import DialogManager from "./components/DialogManager";
import "./App.css";

const App: React.FC = () => {
  return (
    <DialogProvider>
      <div id="app">
        <h1>WinMan - Window Manager</h1>
        <DialogManager />
      </div>
    </DialogProvider>
  );
};

export default App;
