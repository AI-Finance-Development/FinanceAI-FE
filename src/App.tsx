import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth-page/auth-page";
import BaseLayout from "./layouts/base-layout/base-layout";
import Index from "./pages/index";
import SecureLayout from "./layouts/secure-layout/secure-layout";
import HomePage from "./pages/home-page/home-page";
import Analysis from "./pages/analysis-page/analysis-page";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout>
            <Index />
          </BaseLayout>
        }
      />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/home"
        element={
          <SecureLayout>
            <HomePage />
          </SecureLayout>
        }
      />
      <Route
        path="/analysis"
        element={
          <SecureLayout>
            <Analysis />
          </SecureLayout> 
        }
      />
    </Routes>
  );
}

export default App;
