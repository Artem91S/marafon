import reviews3 from "../../assets/reviews/second/reviews3.png";
import reviews4 from "../../assets/reviews/second/reviews4.png";
import reviews7 from "../../assets/reviews/second/reviews7.png";
import reviews8 from "../../assets/reviews/second/reviews8.png";
import { AiTwotoneNotification } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";

function ReviewsSecond() {
  const { t } = useTranslation();
  return ( 
    <Container
    classNameBlock={'overflow-hidden bg-[#eee]'} >
      <div className="flex items-center gap-1 pb-6">
      <span className="text-[22px] text-center">{t("description.reviewsTitle")}</span>
      <AiTwotoneNotification className="w-5 h-5 text-btnColor"/>
      </div>
      <div className="pt-6 max-w-[450px] relative ">
        <div>
          <img
            src={reviews8}
            alt="poster"
            className="rounded-[8px] max-w-[350px] sm:max-w-[500px]  border-gray-400 rotate-[7deg] relative left-[-30px]"
          />
        </div>
        <div>
          <img
            src={reviews7}
            alt="poster"
            className="rounded-[8px] max-w-[350px] sm:max-w-[500px]   border-gray-400 rotate-[-7deg] absolute right-[-100px] top-[200px]"
          />
        </div>
        <div>
          <img
            src={reviews3}
            alt="poster"
            className="rounded-[8px] max-w-[350px] sm:max-w-[500px]  border-gray-400 rotate-[15deg] relative left-[-40px] "
          />
        </div>
        <div>
          <img
            src={reviews4}
            alt="poster"
            className="rounded-[8px] max-w-[350px] sm:max-w-[500px] rotate-[10deg] absolute  top-[60px] right-[-200px]"
          />
        </div>
      </div>
    </Container>
  );
}

export default ReviewsSecond;
