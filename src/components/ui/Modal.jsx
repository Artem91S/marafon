function Modal({setShowModal}) {

  return (
    <>
    <div className=" fixed top-0 left-0 w-[100%] h-[100%] bg-black/70"/>
    <div className="text-white fixed top-[100px]">
    <button  onClick={()=>{
        setShowModal(false)
        document.body.style.overflow='visible'
        }}>click</button>
    </div>
    </>
  )
}

export default Modal