import { AiTwotoneNotification } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import SwiperPagination from "./SwiperPagination";


function ReviewsSecond() {
  const { t } = useTranslation();
  return ( 
    <Container
    classNameBlock={'overflow-hidden bg-gradient-to-b from-white to-[#eee]'} >
      <div className="flex items-center pb-6">
      <span className="text-[22px] md:text-[25px] text-center">
      {t("description.reviewsTitle")} 
      <AiTwotoneNotification className="w-5 h-5 md:w-10 md:h-10 inline-block text-btnColor"/>
      </span>
      </div>     
      <SwiperPagination/>
    </Container>
  );
}

export default ReviewsSecond;
