import React from "react";
import Sidebar from "./components/header/Sidebar";
import Hero from "./components/hero/Hero";

export const App = () => {
  return (
    <div className="flex justify-between items-center">
      <Sidebar />
      <Hero />
    </div>
  );
};
export default App;
