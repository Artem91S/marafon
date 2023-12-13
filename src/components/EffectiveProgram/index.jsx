import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GiPresent } from "react-icons/gi";
import Elips from '../../assets/icon/Elips';


const mainEffects=[
    {
        id:1,
        text:'Авторська программа тренувань Анны Бурнышевой',
        icon:<FaFileDownload className='w-[30px] h-[30px]'/>
    },
    {
        id:2,
        text:'Тренування до 15 хвилин на день (Табата, EMOM, WOD)',
        icon:<MdTimer className='w-[30px] h-[30px]'/>
    },
    {
        id:3,
        text:'Мотивація та підтримка від ментора або Анны',
        icon:<MdEnergySavingsLeaf className='w-[30px] h-[30px]'/>
    },
    {
        id:4,
        text:'Прямі ефіри експертів: психолог, реабілітолог, дієтолог та інші',
        icon:<FaMicrophoneAlt className='w-[30px] h-[30px]'/>
    },
    {
        id:5,
        text:'2 види меню з рецептами від дієтолога на весь марафон',
        icon:<ImSpoonKnife className='w-[30px] h-[30px]'/>
    },
    {
        id:6,
        text:'Нагороди за найкращі результати',
        icon:<GiPresent className='w-[30px] h-[30px]'/>
    },

]

function EffectiveProgram() {
  return (
    <section className='px-3 py-10 border-black flex flex-col items-center justify-center relative'>
        <h2 className='pb-10 text-center text-[24px]'>Секрет нашого підходу</h2>
        {/* <Elips  /> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 px-2'>
     
           {mainEffects.map(post=>(
            <div key={post.id} className='flex gap-4 justify-center items-center max-w-[500px]'>
                {post.icon}
                <p className='flex-1 text-[20px]'>{post.text}</p>
            </div>
           ))}
        </div>
    </section>
  )
}

export default EffectiveProgram