import React from 'react'

function List(title,data) {
  return (
    <div>
    <h3 className="text-[30px]">{title}</h3>
    <ul>
      {data && data.map((item) => (
        <li key={item.id}>
          <GiCheckMark />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default List