import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiOutlineCaretRight } from "react-icons/ai";

import { AiFillFire } from "react-icons/ai";

const mainEffects=[
    {
        id:1,
        text:"aboutTextFirst",
    },
    {
        id:2,
        text:'aboutTextSecond',
    },
    {
        id:3,
        text:'aboutTextTheerd',
    },
    {
        id:4,
        text:'aboutTextFourth',
    },
 

]

function AboutIntensive() {
    const { t } = useTranslation();
  return (
    <section className='px-3 pb-7 bg-gradient-to-b from-white to-[#eee] pt-[20px] border-black flex flex-col justify-between items-center  '>
        <h2 className='py-6 text-center text-[24px] border-b-[2px]'> {t("description.aboutIntensiveTitle")}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 px-2'>
     
           {mainEffects.map(post=>(
            <div key={post.id} className='flex border-b-[2px] gap-3 justify-center items-center '>
           <AiOutlineCaretRight className='w-[30px] h-[30px] text-btnColor'/>
                <p className='flex-1 text-[16px] py-3'> {t(`description.${post.text}`)}</p>
            </div>
           ))}
        </div>
    </section>
  )
}

export default AboutIntensive