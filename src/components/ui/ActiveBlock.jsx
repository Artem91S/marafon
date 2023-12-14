import arrowRight from "./../../assets/arrow-left.svg";
import arrowLeft from "./../../assets/arrow_left.svg";
import Button from "../ui/Button.jsx";
function ActiveBlock() {
  return (
    <div className="relative flex items-center  justify-center">
        <Button style="px-3 py-4 text-[18px] " />
        <div className="flex gap-[175px] absolute top-0 left-[-100px]">
          <img src={arrowLeft} alt="arrow left" className="animate-pulse" />
          <img src={arrowRight} alt="arrow right" className="animate-pulse" />
        </div>
      </div>
  )
}

export default ActiveBlock