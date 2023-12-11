import React, { useEffect, useState } from "react";
import  arrowRight from './../../assets/arrow-left.svg'
import  arrowLeft from './../../assets/arrow_left.svg'
import Button from "../ui/Button";
import { useTranslation } from 'react-i18next';
import  i18n  from './../../Language.js';
import EN from './../../assets/en.png'
import UA from './../../assets/ua.png'

function Hero() {
  // const [navLinks, setNavLinks]=useState()
  const [lang, setLang] = useState(localStorage.getItem('i18nextLng'))
  const { t } = useTranslation();
  // useEffect(()=>{
  //   i18n.changeLanguage(lang)
  //   if(lang === 'ru') {
  //     setNavLinks(linksEN)
  //   }
  //   else{
  //     setNavLinks(linksUA)
  //   }
  // }
  // ,[lang])

  useEffect(()=>{
    i18n.changeLanguage(lang)
    console.log(lang);
  },[lang])
  return (
    <section className="px-3 flex flex-col items-center text-center gap-10 h-[90vh]">
       <img 
        className=' fixed top-[25px] left-[170px] sm:left-[215px] lg:top-[35px] z-[20] cursor-pointer hover:scale-125'
        src={lang === 'ru'? EN : UA} alt={lang === 'ru'? "Russian" : "Ukraine"}  onClick={(e)=>setLang(lang === 'ru'? 'ua':"ru")} /> 
      <h1 className="text-[24px] pt-[20px] px-2">
      {t('description.greeting')} <span className=" text-btnColor font-bold">15 КГ</span> БЕЗ
        ДІЄТ, ПІДРАХУНКУ КАЛОРІЙ ЗА <span className="font-bold">21 ДЕНЬ</span>!
      </h1>
      <p className="text-black/30 text-[14px]">
        Віднови свій жіночий ресурс, зарядись енергією та схудни разом з
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="w-[100px] h-[100px] rounded-full bg-[url('./assets/profilePhoto.jpg')] bg-cover bg-top border-[4px] " />
        <p className="text-center">Анна Бурнышева </p>
      </div>
      <div className="pb-[30px] relative">
        <Button style="px-3 py-4 text-[18px]"/>
        <div className="flex gap-[170px] absolute top-0 left-[-100px]">
        <img src={arrowLeft} alt="arrow left"  />
        <img src={arrowRight} alt="arrow right" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
