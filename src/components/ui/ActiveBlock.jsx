import arrowRight from "./../../assets/arrow-left.svg";
import arrowLeft from "./../../assets/arrow_left.svg";
import Button from "../ui/Button.jsx";
function ActiveBlock(className) {
  return (
    <div className={`relative flex items-center  justify-center ${className}`}>
       
        <div className="flex gap-3 justify-center items-center ">
          <img src={arrowLeft} alt="arrow left" className="animate-pulse w-[60px] sm:w-[80px] lg:w-[100px]" />
          <Button style="px-2 py-3 text-[18px] z-1 md:px-3 md:py-4 lg:text-[22px] lg:px-4 " />
          <img src={arrowRight} alt="arrow right" className="animate-pulse w-[60px] sm:w-[80px] lg:w-[100px]" />
        </div>
      </div>
  )
}

export default ActiveBlock