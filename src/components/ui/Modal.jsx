import { FiX } from "react-icons/fi";
import ActiveBlock from "./ActiveBlock";

function Modal({setShowModal}) {

  return (
    <>
    <div className=" fixed top-0 left-0 w-[100%] h-[100%] bg-black/70 z-40"/>
    <div className="text-white top-0 left-0  fixed w-[100%] h-[100%] flex justify-center items-center z-50">
      <div className=" bg-[url('./assets/modal_bg.jpg')] relative bg-cover bg-top rounded-xl w-[370px] h-[200px]  ">
      <div  onClick={()=>{
        setShowModal(false)
        document.body.style.overflow='visible'
        }}>
          <FiX className="w-10 h-10 absolute right-0 top-[-40px]" />
        </div>
        <div className=" flex flex-col items-center justify-between gap-10">
          <h2 
           style={{textShadow:'#FFF 3px 2px 15px'}}
          className="text-[18px] text-black/40 text-center pt-4">Не зволікай. Доєднуйся до марафону прямо зараз. </h2>
          <ActiveBlock/>
        </div>
    </div>
      </div>
    
    </>
  )
}

export default Modal