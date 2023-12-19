import React from "react";
import { useTranslation } from "react-i18next";
import { linkInsta } from '../utils/variables.js'
function Button({ style }) {
  const { t } = useTranslation();
  return (
    <button
      style={{
        transform:
          "0.25s ease-in,opacity 0.25s ease-in,visibility 0.25s ease-in",
      }}
      className={`bg-btnColor cursor-pointer rounded-[10px] md:text-[20px] shadow-2xl shadow-zinc-950/50 ${style}`}
    >
      <a
        href={linkInsta}
        target="_blank"
      >
        {t("description.btnText")}
      </a>
    </button>
  );
}

export default Button;
