import React, { useState } from "react";
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { IoCaretUpCircleOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";


import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const questings = [
  {
    id: "1",
    title: "FagQuestingsFirstQuesting",
    text:"FagQuestingsFirstAnswer"
  },
  {
    id: "2",
    title: "FagQuestingsSecondQuesting",
    text:"FagQuestingsSecondAnswer"
    },
  {
    id: "3",
    title: "FagQuestingsTheerdQuesting",
    text:"FagQuestingsTheersAnswer"
    },
    {
    id: "4",
    title: "FagQuestingsFourthQuesting",
    text:"FagQuestingsFourthAnswer"
    },
];

export default function FAQ() {
  const { t } =useTranslation()
  const [showAnswer, setShowAnswer] = useState([]);
  //   const [show, setShow] = useState(false);

  const textAnimation = {
    hidden: {
      //   x: -10,
      opacity: 0,
    },
    visible: (custom) => ({
      //   x: 0,
      opacity: 1,

    }),
  };

  const handleClick = (e) => {
  
    const id = e.currentTarget.id;

    if (showAnswer.includes(id)) {
      setShowAnswer(showAnswer.filter((item) => item !== id));
      console.log(showAnswer);
    } else {
      console.log(id);
      setShowAnswer((e) => {
        return [...showAnswer, id];
      });
      console.log(showAnswer);
    }
  };

  return (
    <section className="px-3 py-6 flex flex-col  gap-4 items-center">
      <h3 className="text-center pb-4 text-[24px]">{t("description.FaqTitile")}</h3>
      <div className="flex flex-col w-full border-t-[2px] border-b-[2px] gap-10 py-4 last:border-0 ">
        {questings.map((questing) => (
          <div
            key={questing.id}
            className="border-b-[2px] pb-4 "
            onClick={(e) => handleClick(e)}
            id={questing.id}
          >
            <div className="flex justify-between ">
              <p className="max-w-[300px] text-xl">{t(`description.${questing.title}`)}
              </p>

              {!showAnswer.includes(questing.id) ? (
                <motion.div
                  variants={textAnimation}
                  initial="hidden"
                  whileInView="visible"
                  exit="hidden"
                >
                  <IoCaretDownCircleOutline className="w-[30px] h-[30px]" />
                </motion.div>
              ) : (
                <motion.div
                  variants={textAnimation}
                  initial="hidden"
                  whileInView="visible"
                  exit="hidden"
                >
                  <IoCaretUpCircleOutline className="w-[30px] h-[30px]" />
                </motion.div>
              )}
            </div>
            {showAnswer.includes(questing.id) ? (
              <motion.p
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                className="flex gap-3 items-center text-sm text-black/40 pt-4"
              >
                {t(`description.${questing.text}`)}
                {questing.id==="1" && <>
                <FiArrowRight className="text-[20px]"/>
               <a href="https://t.me/Burnysheva" target='_blank' className="text-[18px] font-bold animate-pulse">
                {t("description.FagQuestingsFirstAnswerLink")}
                  </a>
                  </>
                  }

              </motion.p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}