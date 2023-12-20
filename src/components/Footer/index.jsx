import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import ActiveBlock from "../ui/ActiveBlock";
import { FaTelegram } from "react-icons/fa";
import { linkInsta, lingTelega } from "../utils/variables";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="grid grid-cols-1 justify-items-center gap-10  py-10 md:px-6">
      <div className="flex flex-col gap-10">
        <div className="flex gap-10">
          <a
            target="_blank"
            href={linkInsta}
            className="flex flex-col p-2 gap-2 justify-center items-center hover:text-black/40 "
          >
            <FaInstagram className="w-[50px] h-[50px]" />
            <h4 >{t("description.FooterTitle")}</h4>
          </a>
          <a
            target="_blank"
            href={lingTelega}
            className="flex flex-col gap-2 justify-center items-center hover:text-black/40 "
          >
            <FaTelegram className="w-[50px] h-[50px]" />
            <h4 >{t("description.FooterSubTitle")}</h4>
          </a>
        </div>
      </div>

      <ActiveBlock />
    
   
        <div className="">
          <p className=" text-btnColor/40 ">{t("description.PolisyConf")}</p>
          <p className="text-btnColor/40 ">{t("description.PublickOffert")}</p>
        </div>
        <div className="text-[14px] text-center text-black/30 ">
          <span>© 2023 </span>
          <a
            href={linkInsta}
            target="_blank"
            className=" font-semibold hover:text-black/70"
          >
            {t("description.AnnName")}.
          </a>
          <p>{t("description.coppywritingText")}</p>
        </div>
    
    </footer>
  );
}

export default Footer;
