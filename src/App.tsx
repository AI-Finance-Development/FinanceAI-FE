import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth-page/auth-page";
import BaseLayout from "./layouts/base-layout/base-layout";
import Index from "./pages/index";
import SecureLayout from "./layouts/secure-layout/secure-layout";
import HomePage from "./pages/home-page/home-page";
import Analysis from "./pages/analysis-page/analysis-page";
import { useAtom } from "jotai";
import { messageAtom } from "./store/global-atoms";
import { message } from "antd";
import LotDetailPage from "./pages/lot-detail-page/lot-detail-page";
import NotFoundPage from "./pages/404-page/404-page";

function App() {

  const [toastMessage] = useAtom(messageAtom);
  const [, setMessage] = useAtom(messageAtom);

  useEffect(() => {
    if (toastMessage.message === '') return;
    switch (toastMessage.type) {
      case 'error':
        message.error(toastMessage.message);
        break;
      case 'info':
        message.info(toastMessage.message);
        break;
      case 'warning':
        message.warning(toastMessage.message);
        break;
      case 'success':
        message.success(toastMessage.message);
        break;
    }
    setMessage({ ...toastMessage, message: '' });
  }, [toastMessage, setMessage]);


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
      <Route
        path="/lot/:id"
        element={
          <SecureLayout>
            <LotDetailPage />
          </SecureLayout>
        }
      />
       <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  );
}

export default App;
