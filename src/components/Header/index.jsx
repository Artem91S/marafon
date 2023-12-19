import React, { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
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
    <header className="flex justify-between  border-b-[1px] item-center p-3 lg:p-5 sticky top-0 backdrop-blur-md w-full z-10">
   
      <div 
       onClick={(e) => setLang(lang === "ru" ? "ua" : "ru")}
      className="px-2 lg:px-3 gap-2 flex justify-center items-center border-[2px] border-black/40 rounded-xl cursor-pointer">
        <p className=" uppercase text-black/40"> 
          {lang}
        </p>
        <img
          src={lang === "ru" ? EN : UA}
          alt={lang === "ru" ? "Russian" : "Ukraine"}
         
        />
      </div>

      <Button style="px-3 py-2 lg:px-4 lg:py-3 text-[18px] lg:text-[20px] " />
    </header>
  )
}

export default Header;
