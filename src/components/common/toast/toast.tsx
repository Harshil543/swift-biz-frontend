"use client";
import { Toast } from "primereact/toast";
import React, { createContext, useContext, useRef } from "react";
import styles from "./toast.module.scss";

export const ToastContext = createContext({});

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: any) => {
  const toastRef = useRef<any>(null);

  function showSuccess(summary: string, detail: string) {
    toastRef?.current?.show({
      severity: "success",
      summary: summary,
      detail,
      life: 2000
    });
  }

  function showError(summary: string, detail: string) {
    toastRef?.current?.show({
      severity: "error",
      summary: "Error",
      detail: detail,
      life: 2000
    });
  }

  function showInfo(summary: string, detail: string) {
    toastRef?.current?.show({
      severity: "info",
      summary: "Info",
      detail: detail,
      life: 2000
    });
  }

  return (
    <ToastContext.Provider value={{ showSuccess, showError, showInfo }}>
      {children}
      {/* Render the Toast component */}
      <Toast ref={toastRef} className={styles.toastMessage} />
    </ToastContext.Provider>
  );
};
