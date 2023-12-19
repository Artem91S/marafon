import Container from "../ui/Container";
import { useTranslation } from "react-i18next";
import { sliderSecond } from "./PostersList";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
function Reviews() {
  const { t } = useTranslation();

  return (
    <Container title={t("description.reviewsTitle")}>
      <div className="flex items-center md:max-w-[500px]">
        {/* <p className=" hidden md:block h-[0px] rotate-90 absolute text-[20px] left-[-80px] tracking-wide text-btnColor">Відгуки моїх щасливих клієнтів </p> */}
        <div className="flex-2 flex flex-col gap-2 items-center px-4 max-w-[500px] max-h-[500px] md:max-w-[750px]   overflow-y-scroll">
          {sliderSecond.map((item) => (
            <div key={item.id} >
              <img
                src={item.img}
                alt="reviews"
                className="max-h-[700px] md:max-w-[800px] rounded-xl "
              />
            </div>
          ))}
          
        </div>
        {/* <div className="hidden h-[0px] rotate-90 absolute text-[20px] right-[0px] tracking-wide md:flex items-center gap-10"> 
        <FiChevronsLeft />
         <p>Гортай вниз </p> 
         <FiChevronsRight/>
         </div> */}
      </div>
    </Container>
  );
}

export default Reviews;
