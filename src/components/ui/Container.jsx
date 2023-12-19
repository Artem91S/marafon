import React from 'react'

function Container({title,children,classNameBlock,classNameTittle}) {
  return (
    <section className={`px-3 md:px-6 py-[50px] md:py-[60px] lg:py-[70px] flex flex-col justify-between items-center ${classNameBlock}`}>
        <h2 className={`pb-8 text-center text-[24px] md:text-[26px] lg:text-[30px] ${classNameTittle}`}>{title}</h2>
        {children}
    </section>
  )
}

export default Container