import React from "react";
import { IoClose } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from 'react-i18next'; 
import Container from "../ui/Container";
import { linkInsta } from "../utils/variables";
import ListOfProperties from "./ListOfProperties";
const successInform = [
  {
    id: 1,
    text: 'successInformTextFirst',
  },
  {
    id: 2,
    text:'successInformTextSecond',
  },
  {
    id: 3,
    text: 'successInformTextThird',
  },
  {
    id: 4,
    text: 'successInformTextFourth',
  },
];

const cancelInform = [
  {
    id: 1,
    text: 'cancelInformeTextFirst',
  },
  {
    id: 2,
    text: 'cancelInformTextSecond',
  },
  {
    id: 3,
    text: 'cancelInformTextThird',
  },
];

function Information() {
  const { t } = useTranslation();
  return (
    <Container classNameBlock={'gap-3 bg-[#eee]'}>
      <ListOfProperties
      data={successInform}
      icon={<GiCheckMark className="text-[30px] md:text-[40px] " />}
      />
       <ListOfProperties
      data={cancelInform}
      icon={<IoClose className="text-[30px] md:text-[40px]" />}
      />    
      <p className="text-black/40 text-[12px] sm:text-[16px] md:text-[18px] max-w-[400px] sm:max-w-[640px] md:max-w-[750px] ">
        *{t('description.informationDescription')}
      </p>
      <div className="flex flex-col items-end sm:pt-5 md:pt-10 sm:w-full">
      <p className="text-black/40 text-[12px] sm:text-[16px] md:text-[18px]  pt-3">{t('description.informationSubdescription')}</p>
      <a href={linkInsta} target='_blank' className="text-black/40 hover:text-black/70 text-[12px] sm:text-[16px] md:text-[18px] font-bold pt-3"> {t('description.AnnName')}</a>
      </div>
      </Container>
  );
}

export default Information;
