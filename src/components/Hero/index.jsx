import arrowRight from "./../../assets/arrow-left.svg";
import arrowLeft from "./../../assets/arrow_left.svg";
import Button from "../ui/Button.jsx";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-3 flex flex-col justify-between items-center text-center gap-2 h-[85vh] box-border">
      <div>
        <span className="text-[18px] py-[20px] px-2">
          {t("description.titleHero")}
        </span>
        <h1 className=" text-btnColor font-semibold text-3xl pt-[10px] pb-[50px]">
          {t("description.subTitleHero")}
        </h1>
        <p className="pb-[30px] text-[18px]"> {t("description.descriptionHero")}</p>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-[url('./assets/profilePhoto.jpg')] bg-cover bg-top border-[4px] " />
          <p className="text-center pt-[30px]"> {t("description.AnnName")}</p>
        </div>
      </div>

      <div className="relative">
        <Button style="px-3 py-4 text-[18px] " />
        <div className="flex gap-[170px] absolute top-0 left-[-100px]">
          <img src={arrowLeft} alt="arrow left" className="animate-pulse" />
          <img src={arrowRight} alt="arrow right" className="animate-pulse" />
        </div>
      </div>
      <p className="text-black/30 text-[14px]">
        {t("description.descriptionSloganHero")}
      </p>
    </section>
  );
}

export default Hero;
