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
    <section className='px-3 py-10 border-black flex flex-col justify-between items-center  relative h-[100vh]'>
        <h2 className='pb-30 text-center text-[24px]'> {t("description.aboutIntensiveTitle")}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 px-2'>
     
           {mainEffects.map(post=>(
            <div key={post.id} className='flex gap-6 justify-center items-center max-w-[500px]'>
           <AiOutlineCaretRight className='w-[30px] h-[30px] text-btnColor'/>
                <p className='flex-1 text-[18px]'> {t(`description.${post.text}`)}</p>
            </div>
           ))}
        </div>
    </section>
  )
}

export default AboutIntensive