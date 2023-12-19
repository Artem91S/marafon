import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiTwotoneFire } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import Container from "../ui/Container";
import ActiveBlock from '../ui/ActiveBlock'
const mainEffects = [
  {
    id: 1,
    text: "mainEffectsFirstDescription",
  },
  {
    id: 2,
    text: "mainEffectsSecondDescription",
  },
  {
    id: 3,
    text: "mainEffectsTheedDescription",
  },
  {
    id: 4,
    text: "mainEffectsForthDescription",
  },
  {
    id: 5,
    text: "mainEffectsFivesDescription",
  },
  {
    id: 6,
    text: "mainEffectsSixDescription",
  },
  
];

function EffectiveProgram() {
  const { t } = useTranslation();
  return (
    <Container
    title={t("description.effectiveTitle")}
    classNameBlock={'bg-gradient-to-t from-white to-[#eee] border-black sm:gap-14'}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:px-0 pb-6">
        {mainEffects.map((post) => (
          <div
            key={post.id}
            className="flex gap-6  max-w-[500px] md:max-w-[700px] lg:max-w-[890px]"
          >
            <AiTwotoneFire className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] text-btnColor" />
            <p className="flex-1 text-[14px] md:text-[18px] lg:text-[20px]">
              {t(`description.${post.text}`)}
            </p>
          </div>
        ))}
      </div>
      <ActiveBlock/>
    </Container>
  );
}

export default EffectiveProgram;
