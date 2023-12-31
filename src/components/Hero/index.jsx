import { useTranslation } from "react-i18next";
import ActiveBlock from "../ui/ActiveBlock";
import poster from '../../assets/profilePhoto.jpg'
import Elips from "../../assets/Elips";
import Arrows from "../../assets/Arrows";



function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-3 flex flex-col justify-between items-center text-center gap-2 box-border pt-[20px] pb-[50px] md:px-8 md:gap-10 md:pt-[50px] xl:mx-[10%] ">
      {/* <Elips fill={'#c21919'} className=" absolute top-[-100px] left-[-500px] hidden md:block"/> */}
      <div>
        <span className="text-[24px] md:text-[26px] pb-[20px] px-2 ">
          {t("description.titleHero")}
        </span>
        <h1 className=" text-btnColor font-semibold text-4xl md:text-[40px] pt-[10px] md:pt-[20px] pb-[30px] ">
          {t("description.subTitleHero")}
        </h1>
        <p className="pb-[30px] text-[20px] md:pb-[40px] md:text-[22px] "> {t("description.descriptionHero")}</p>

        <a href="https://www.instagram.com/burnysheva_diet_trener/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank' className="flex flex-col items-center">
          <Arrows className='hidden md:block'/>
          <div className="w-[100px] md:w-[120px] h-[100px] md:h-[120px] border-[4px] overflow-hidden rounded-[50%] ">
            <img src={poster} alt="poster"  className=" " />
          </div>
          <strong className="text-center text-[20px] font-medium pb-5 pt-[30px] hover:text-black/40"> {t("description.AnnName")}</strong>
        </a>
      </div>
      
      <ActiveBlock/>
      <p className="text-black/30 text-[14px] pt-7 md:text-[18px] md:pt-14 ">
        {t("description.descriptionSloganHero")}
      </p>
   
    </section>
  );
}

export default Hero;
