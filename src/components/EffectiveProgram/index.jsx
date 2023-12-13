import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiTwotoneFire } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";

const mainEffects=[
    {
        id:1,
        text:"mainEffectsFirstDescription",
    },
    {
        id:2,
        text:'mainEffectsSecondDescription',
    },
    {
        id:3,
        text:'mainEffectsTheedDescription',
    },
    {
        id:4,
        text:'mainEffectsForthDescription',
    },
    {
        id:5,
        text:'mainEffectsFivesDescription',
    },
 

]

function EffectiveProgram() {
    const { t } = useTranslation();
  return (
    <section className='px-3 bg-gradient-to-t from-white to-[#eee] py-10 border-black flex flex-col justify-between items-center '>
        <h2 className='pb-[30px] text-center text-[24px]'> {t("description.effectiveTitle")}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 px-2'>
     
           {mainEffects.map(post=>(
            <div key={post.id} className='flex gap-6 justify-center items-center max-w-[500px]'>
           <AiTwotoneFire className='w-[30px] h-[30px] text-btnColor'/>
                <p className='flex-1 text-[14px]'> {t(`description.${post.text}`)}</p>
            </div>
           ))}
        </div>
    </section>
  )
}

export default EffectiveProgram