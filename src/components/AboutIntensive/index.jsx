import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCaretRight } from "react-icons/ai";
import Container from "../ui/Container";

const mainEffects = [
  {
    id: 1,
    text: "aboutTextFirst",
  },
  {
    id: 2,
    text: "aboutTextSecond",
  },
  {
    id: 3,
    text: "aboutTextTheerd",
  },
  {
    id: 4,
    text: "aboutTextFourth",
  },
];

function AboutIntensive() {
  const { t } = useTranslation();
  return (
    <Container
      title={t("description.aboutIntensiveTitle")}
      classNameBlock={"bg-[#eee] border-black "}
      classNameTittle={"border-b-[2px]"}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 px-2">
        {mainEffects.map((post) => (
          <div
            key={post.id}
            className="flex border-b-[2px] gap-3 justify-center items-center sm:items-start"
          >
            <div className="flex flex-col items-center justify-center h-full">
            <AiOutlineCaretRight className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-btnColor" />
            </div>
            <p className="flex-1 text-[16px] py-3 sm:text-[18px] md:text-[20px]">
              {t(`description.${post.text}`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AboutIntensive;
