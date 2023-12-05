import React, { useState } from "react";
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { IoCaretUpCircleOutline } from "react-icons/io5";

import { motion } from "framer-motion";

const questings = [
  {
    id: "1",
    title: " Якщо в мене є питання, куди писати?",
    text: "Тримай ссилку на наш інстаграм, пиши в Дірект, там дівчатка менеджери завжди на зв’язку.",
  },
  {
    id: "2",
    title: "Якщо в мене болить спина/коліна тощо. Мені можна займатись?",
    text: "Тренування з власною вагою і підходять всім. Але! Якщо в тебе є питання по здоров’ю, обов’язково проконсультуйся з лікарем.Також, на курсі є реабілітолог, який проконсультує з приводу опорно-рухового апарату.",
  },
  {
    id: "3",
    title: " Чи можно займатись на ГВ?",
    text: "Так. Грудне вигодовування не є протипоказанням. 70% жінок на курсі – годуючі мами. Харчування сбалансоване, ніхто не голодує, тому не переживай😉",
  },
];

export default function FAQ() {
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
      <h3 className="text-center pb-4 text-[24px]">Що ще цікавить!?</h3>
      <div className="flex flex-col w-full border-t-[2px] border-b-[2px] gap-10 py-4 last:border-0 ">
        {questings.map((questing) => (
          <div
            key={questing.id}
            className="border-b-[2px] pb-4 "
            onClick={(e) => handleClick(e)}
            id={questing.id}
          >
            <div className="flex justify-between ">
              <p className="max-w-[300px] text-xl">{questing.title}</p>

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
                className=" text-sm text-black/40 pt-4"
              >
                {questing.text}
              </motion.p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
