
import Container from "../ui/Container";
import { useTranslation } from "react-i18next";

// const rew = [
//   {
//     id: 1,
//     img: reviews1,
//     text: "reviews",
//   },
//   {
//     id: 2,
//     img: reviews2,
//     text: "reviews",
//   },
//   {
//     id: 3,
//     img: reviews3,
//     text: "reviews",
//   },
//   {
//     id: 4,
//     img: reviews4,
//     text: "reviews",
//   },
//   {
//     id: 5,
//     img: reviews5,
//     text: "reviews",
//   },
//   {
//     id: 6,
//     img: reviews6,
//     text: "reviews",
//   },
//   {
//     id: 7,
//     img: reviews7,
//     text: "reviews",
//   },
//   {
//     id: 8,
//     img: reviews8,
//     text: "reviews",
//   },
//   {
//     id: 9,
//     img: reviews9,
//     text: "reviews",
//   },
//   {
//     id: 10,
//     img: reviews10,
//     text: "reviews",
//   },
//   {
//     id: 11,
//     img: reviews11,
//     text: "reviews",
//   },
//   {
//     id: 12,
//     img: reviews12,
//     text: "reviews",
//   },
//   {
//     id: 13,
//     img: reviews13,
//     text: "reviews",
//   },
//   {
//     id: 14,
//     img: reviews14,
//     text: "reviews",
//   },
//   {
//     id: 15,
//     img: reviews15,
//     text: "reviews",
//   },
//   {
//     id: 16,
//     img: reviews16,
//     text: "reviews",
//   },
//   {
//     id: 17,
//     img: reviews17,
//     text: "reviews",
//   },
// ];



function Reviews() {
  const { t } = useTranslation();

  return (
    <Container
    title={t("description.reviewsTitle")} >
    {/* <section className="flex flex-col items-center  py-6 ">
      <h3 className="text-[24px]">Відгуки учасників</h3> */}
      {/* <div className="flex flex-col gap-4 items-center px-4 w-full max-h-[300px] overflow-y-scroll">
      {rew.map(item=>(
        <div key={item.id} className="max-w-[500px]">
          <img src={item.img} alt={item.text}  />
        </div>
      ))}
      </div> */}
      {/* </section> */}
      </Container>
  );
}

export default Reviews;
