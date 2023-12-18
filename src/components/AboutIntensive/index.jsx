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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2">
        {mainEffects.map((post) => (
          <div
            key={post.id}
            className="flex border-b-[2px] gap-3 justify-center items-center "
          >
            <AiOutlineCaretRight className="w-[30px] h-[30px] text-btnColor" />
            <p className="flex-1 text-[16px] py-3">
              {" "}
              {t(`description.${post.text}`)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AboutIntensive;
