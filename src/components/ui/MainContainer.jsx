import React from 'react'

function MainContainer({children}) {
  return (
    <main className="lg:grid lg:grid-cols-8">
    <div className="hidden lg:block bg-gradient-to-b from-btnColor/50 to-btnColor/5 col-span-1"></div>
    <div className=" col-span-6">
        {children}
    </div>
        <div className="hidden lg:block bg-gradient-to-b from-btnColor/50 to-btnColor/5 col-span-1"></div>
      </main>
  )
}

export default MainContainer