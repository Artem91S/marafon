import React from 'react'

function Container({title,children,classNameBlock,classNameTittle}) {
  return (
    <section className={`px-3 py-[50px] flex flex-col justify-between items-center ${classNameBlock}`}>
        <h2 className={`pb-8 text-center text-[24px] ${classNameTittle}`}>{title}</h2>
        {children}
    </section>
  )
}

export default Container