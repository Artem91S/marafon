import React from "react";
import { IoClose } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";


const successInform = [
  {
    id: 1,
    text: "Для тих, хто бажає “перезавантажитись”, покращити свій психо-емоційний стан;",
  },
  {
    id: 2,
    text: "Для тих, хто має зайву вагу;",
  },
  {
    id: 3,
    text: "Для тих, хто ніколи не займався, або має досвід (2 рівня складності).",
  },
];

const cancelInform = [
  {
    id: 1,
    text: "Вагітним, та тим, хто нещодавно народив (природні пологи – менш ніж 2 місяці, кесарів розтин - 4);",
  },
  {
    id: 2,
    text: "Діабетикам 1 типу (2 можна);",
  },
  {
    id: 3,
    text: "Людям з тяжкими серцево-судинними захворюваннями.",
  },
];

function Information() {
  return (
    <section className="px-6 py-6">
      <div>
        <h3 className="text-[25px] pb-4 text-center">Для кого підходить</h3>
        <ul className="grid grid-cols-1 gap-4 pb-6">
          {successInform.map((item) => (
            <li className="flex gap-4" key={item.id}>
              <GiCheckMark className="text-[30px]" />
              <span className="w-[320px] text-[14px]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-[25px] pb-4 pt-5 text-center">та не підходить*</h3>
        <ul className="grid grid-cols-1 gap-4 pb-6">
          {cancelInform.map((item) => (
            <li className="flex gap-2 " key={item.id}>
              <IoClose className="text-[30px]" />
              <span className="w-[320px] text-[14px]"> {item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-black/40 text-[12px]">
        *Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, debitis,
        necessitatibus voluptatum tempore ipsam hic aliquid eligendi veritatis
        possimus ab dicta, assumenda exercitationem. Reprehenderit placeat ex
        voluptatem odit optio eum nemo assumenda dolore deleniti quaerat, earum
        asperiores alias consequuntur odio consequatur pariatur ipsum doloremque
        dignissimos, et deserunt fugit aspernatur tempore magnam dolorem?
        Laborum, laboriosam nisi?
      </p>
    </section>
  );
}

export default Information;
