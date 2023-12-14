import React from "react";
import { useTranslation } from "react-i18next";

function Button({ style }) {
  const { t } = useTranslation();
  return <button 
  style={{
    transform: '0.25s ease-in,opacity 0.25s ease-in,visibility 0.25s ease-in'
  }}
  className={`bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 ${style}`}>{t("description.btnText")}</button>;
}

export default Button;

