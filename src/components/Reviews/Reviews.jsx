import Container from "../ui/Container";
import { useTranslation } from "react-i18next";
import { sliderSecond } from "./PostersList";

function Reviews() {
  const { t } = useTranslation();

  return (
    <Container title={t("description.reviewsTitle")}>
      <div className="flex flex-col gap-2 items-center px-4 max-w-[500px] max-h-[500px] overflow-y-scroll">
        {sliderSecond.map((item) => (
          <div key={item.id} className=" ">
            <img
              src={item.img}
              alt="reviews"
              className="max-h-[700px] rounded-xl "
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Reviews;
