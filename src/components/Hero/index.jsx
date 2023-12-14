import { useTranslation } from "react-i18next";
import ActiveBlock from "../ui/ActiveBlock";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="px-3 flex flex-col justify-between items-center text-center gap-2 box-border pt-[20px] pb-[50px]">
      <div>
        <span className="text-[24px] pb-[20px] px-2">
          {t("description.titleHero")}
        </span>
        <h1 className=" text-btnColor font-semibold text-4xl pt-[10px] pb-[30px]">
          {t("description.subTitleHero")}
        </h1>
        <p className="pb-[30px] text-[20px]"> {t("description.descriptionHero")}</p>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full bg-[url('./assets/profilePhoto.jpg')] bg-cover bg-top border-[4px] " />
          <strong className="text-center text-[20px] font-medium pb-5 pt-[30px] "> {t("description.AnnName")}</strong>
        </div>
      </div>
      <ActiveBlock/>
      <p className="text-black/30 text-[14px] pt-7">
        {t("description.descriptionSloganHero")}
      </p>
    </section>
  );
}

export default Hero;
