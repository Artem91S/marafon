import arrowRight from "./../../assets/arrow-left.svg";
import arrowLeft from "./../../assets/arrow_left.svg";
import Button from "../ui/Button.jsx";
function ActiveBlock() {
  return (
    <div className="relative flex items-center  justify-center">
       
        <div className="flex gap-3 justify-center items-center ">
          <img src={arrowLeft} alt="arrow left" className="animate-pulse w-[60px]" cl />
          <Button style="px-2 py-3 text-[18px] z-1 " />
          <img src={arrowRight} alt="arrow right" className="animate-pulse w-[60px]" />
        </div>
      </div>
  )
}

export default ActiveBlock