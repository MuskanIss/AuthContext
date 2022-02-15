import { Body } from "./Components/Body";
import { Navbar } from "./Components/Navbar";
import { AuthProvider } from "./Context/AuthProvider";
import React from "react";
export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Body />
      </AuthProvider>
    </div>
  );
}
