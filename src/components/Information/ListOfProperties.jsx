import React from 'react'
import { useTranslation } from 'react-i18next';

function ListOfProperties({data,icon,title}) {
  const { t } = useTranslation();
  return (
    <div className='w-full flex flex-col items-center '>
    <h3 className="text-[25px] pb-4  text-center md:pb-10 ">{title}</h3>
    <ul className="flex flex-col gap-4 md:gap-12 pb-6">
      {data.map((item) => (
        <li className="flex gap-4 md:gap-10" key={item.id}>
          <div>
          {icon}
          </div>
          <span className="max-w-[320px] sm:max-w-[500px] md:max-w-[680px] text-[14px] sm:text-[16px] ">{t(`description.${item.text}`)}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ListOfProperties