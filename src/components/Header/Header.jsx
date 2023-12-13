import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../Language.js";
import EN from "./../../assets/en.png";
import UA from "./../../assets/ua.png";

function Header() {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));

  useEffect(() => {
    i18n.changeLanguage(lang);
    console.log(lang);
  }, [lang]);
  return (
    <header className="flex justify-between  border-b-[1px] item-center p-3 sticky top-0 backdrop-blur-md w-full z-10">
      {/* <div>
        <span className=" font-semibold text-[24px]">A</span>
        <span className="text-[40px]">.</span>
        <span className="font-semibold text-[24px] text-btnColor">Б</span>
      </div> */}
      <div className="p-2 flex justify-center items-center ">
        <img
          src={lang === "ru" ? EN : UA}
          alt={lang === "ru" ? "Russian" : "Ukraine"}
          onClick={(e) => setLang(lang === "ru" ? "ua" : "ru")}
        />
      </div>

      <Button style="px-3 py-2 text-[18px] " />
    </header>
  )
}

export default Header;
