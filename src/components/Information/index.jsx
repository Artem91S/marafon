import React from "react";
import { IoClose } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from 'react-i18next'; 

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
    text: 'successInformTextTheerd',
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
    text: 'cancelInformTextTheerd',
  },
];

function Information() {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-6">
      <div>
        <h3 className="text-[25px] pb-4 text-center">{t("description.successInformTitle")}</h3>
        <ul className="grid grid-cols-1 gap-4 pb-6">
          {successInform.map((item) => (
            <li className="flex gap-4" key={item.id}>
              <GiCheckMark className="text-[30px]" />
              <span className="w-[320px] text-[14px]">{t(`description.${item.text}`)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-[25px] pb-4 pt-5 text-center">{t("description.cancelInformTitle")}</h3>
        <ul className="grid grid-cols-1 gap-4 pb-6">
          {cancelInform.map((item) => (
            <li className="flex gap-2 " key={item.id}>
              <IoClose className="text-[30px]" />
              <span className="w-[320px] text-[14px]"> {t(`description.${item.text}`)}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-black/40 text-[12px]">*
      {t('description.informationDescription')}
      </p>
      <div>
      <p className="text-black/40 text-[12px] text-right pt-3">{t('description.informationSubdescription')}</p>
      <p className="text-black/40 text-[12px] font-bold text-right pt-3"> {t('description.AnnName')}</p>
      </div>
    </section>
  );
}

export default Information;
