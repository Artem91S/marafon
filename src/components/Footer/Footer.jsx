import React from "react";
import Button from "../ui/Button";
import  arrowRight from './../../assets/arrow-left.svg'
import  arrowLeft from './../../assets/arrow_left.svg'
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col gap-10 justify-center items-center py-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h4>Я в Інсті</h4>
      <FaInstagram className="w-[50px] h-[50px]  "/>
      <p className="font-bold">Анна Бурнышева</p>
      </div>
      <div className="pb-[30px] relative">
        <Button style="px-3 py-4 text-[18px]" />
        <div className="flex gap-[170px] absolute top-0 left-[-100px]">
          <img src={arrowLeft} alt="arrow"  />
          <img src={arrowRight} alt="arrow" />
        </div>
      </div>
      <div>
        <p className=" text-btnColor/40">Політика конфіденційності</p>
        <p className="text-btnColor/40">Публічна угода оферти</p>
      </div>
      <p className="text-[14px] text-center text-black/30">© 2023 Анна Бурнышева. Всі права захищені.</p>
    </footer>
  );
}

export default Footer;
