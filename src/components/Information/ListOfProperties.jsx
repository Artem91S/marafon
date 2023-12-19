import React from 'react'
import { useTranslation } from 'react-i18next';

function ListOfProperties({data,icon}) {
  const { t } = useTranslation();
  return (
    <div>
    <h3 className="text-[25px] md:text-[26px] pb-4 md:pb-10  text-center">{t("description.successInformTitle")}</h3>
    <ul className="grid grid-cols-1 gap-4 md:gap-12 pb-6">
      {data.map((item) => (
        <li className="flex gap-4 md:gap-10" key={item.id}>
          <div>
          {icon}
          </div>
          <span className="max-w-[320px] sm:max-w-[500px] md:max-w-[680px] text-[14px] sm:text-[18px] md:text-[22px]">{t(`description.${item.text}`)}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ListOfProperties