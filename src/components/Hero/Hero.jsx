import React from "react";
import arrow from "./../../assets/arrow-left.svg";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="mx-6 flex flex-col items-center text-center gap-4">
      <h1 className="text-[20px] pt-[40px] px-2">
        СХУДНИ ДО <span className=" text-btnColor font-bold">15 КГ</span> БЕЗ
        ДІЄТ, ПІДРАХУНКУ КАЛОРІЙ ЗА <span className="font-bold">21 ДЕНЬ</span>!
      </h1>
      <p className="text-black/30 text-[14px]">
        Віднови свій жіночий ресурс, зарядись енергією та схудни разом з
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="w-[100px] h-[100px] rounded-full bg-[url('./assets/_2.jpg')] bg-cover bg-top " />
        <p className="text-center">Анна Бурнышева </p>
      </div>
      <div className="pb-[30px] relative">
        <Button style="px-3 py-4 text-[18px]"/>
        <div className="flex gap-[170px] absolute top-0 left-[-100px]">
        <img src={arrow} alt="arrow" className=" rotate-180" />
        <img src={arrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
