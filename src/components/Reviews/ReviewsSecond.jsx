import { AiTwotoneNotification } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import SwiperPagination from "./SwiperPagination";


function ReviewsSecond() {
  const { t } = useTranslation();
  return ( 
    <Container
    classNameBlock={'overflow-hidden bg-gradient-to-b from-white to-[#eee]'} >
      <div className="flex items-center pb-6 max-w-[640px]  md:max-w-[770px] lg:max-w-[890px]">
      <span className="text-[22px] text-center md:text-[26px] lg:text-[30px]">
      {t("description.reviewsTitle")} 
      <AiTwotoneNotification className="w-5 h-5 md:w-7 md:h-7 inline-block text-btnColor"/>
      </span>
      </div>     
      <SwiperPagination/>
    </Container>
  );
}

export default ReviewsSecond;
