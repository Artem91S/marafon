import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import reviews1 from "../../assets/reviews/second/reviews1.jpg";
import reviews2 from "../../assets/reviews/second/reviews2.jpg";
import reviews3 from "../../assets/reviews/second/reviews3.jpg";
import reviews4 from "../../assets/reviews/second/reviews4.jpg";
import reviews5 from "../../assets/reviews/second/reviews5.jpg";
import reviews6 from "../../assets/reviews/second/reviews6.jpg";
import reviews7 from "../../assets/reviews/second/reviews7.jpg";
import reviews8 from "../../assets/reviews/second/reviews8.jpg";
import reviews9 from "../../assets/reviews/second/reviews9.jpg";

const rew = [
  {
    id: 1,
    img: reviews1,
    text: "reviews",
  },
  {
    id: 2,
    img: reviews2,
    text: "reviews",
  },
  {
    id: 3,
    img: reviews3,
    text: "reviews",
  },
  {
    id: 4,
    img: reviews4,
    text: "reviews",
  },
  {
    id: 5,
    img: reviews5,
    text: "reviews",
  },
  {
    id: 6,
    img: reviews6,
    text: "reviews",
  },
  {
    id: 7,
    img: reviews7,
    text: "reviews",
  },
  {
    id: 8,
    img: reviews8,
    text: "reviews",
  },
  {
    id: 9,
    img: reviews9,
    text: "reviews",
  },
];

function ReviewsSecond() {
  return (
    // <div className="flex justify-center items-center">
    <ResponsiveMasonry  
    style={{
        padding:'5% 10%',
        display: "flex",
        justifyContent: "center",
       
      }}
    columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
      <Masonry  gutter="14px"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "start",
        }}>
        {rew.map((item) => (
          <div key={item.id} className="p-1  ">
            <img src={item.img} alt={item.text} className="w-full h-full rounded-xl border-[2px] border-gray-400" />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
    // </div>
  );
}

export default ReviewsSecond;
