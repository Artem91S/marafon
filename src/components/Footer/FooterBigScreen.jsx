import React from 'react'
import { lingTelega, linkInsta } from '../utils/variables'
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTelegram } from 'react-icons/fa6';
import ActiveBlock from '../ui/ActiveBlock';

function FooterBigScreen() {
    const { t } = useTranslation();
  return (
    <footer className=" py-2 md:px-6 border-t-[1px]">
        <div className='flex justify-between items-center'>

      <div className="flex gap-10">
        <a
          target="_blank"
          href={linkInsta}
          className="flex flex-col p-2 gap-2 justify-center items-center hover:text-black/40 "
        >
          <FaInstagram className="w-[50px] h-[50px]" />
        </a>
        <a
          target="_blank"
          href={lingTelega}
          className="flex flex-col gap-2 justify-center items-center hover:text-black/40 "
        >
          <FaTelegram className="w-[50px] h-[50px]" />
        </a>
      </div>
   

    <ActiveBlock />
  
 
      <div className="flex flex-col gap-4">
        <p className=" text-btnColor/50 ">{t("description.PolisyConf")}</p>
        <p className="text-btnColor/50 ">{t("description.PublickOffert")}</p>
      </div>
      </div>


      <div className="text-[14px] text-black/30 ">
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
  )
}

export default FooterBigScreen