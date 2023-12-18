import { FiX } from "react-icons/fi";
import ActiveBlock from "./ActiveBlock";

function Modal({ setShowModal }) {
  return (
    <>
      <div className=" fixed top-0 left-0 w-[100%] h-[100%] bg-black/70 z-40" />
      <div className="text-white top-0 left-0  fixed w-[100%] h-[100%] flex justify-center items-center z-50">
        <div className=" bg-[url('./assets/modal_bg.jpg')] relative bg-cover bg-top rounded-xl w-[370px] h-[350px]  ">
          <div
            onClick={() => {
              setShowModal(false);
              document.body.style.overflow = "visible";
            }}
          >
            <FiX className="w-7 h-7 absolute right-0 top-[-30px]" />
          </div>
          <div className=" flex flex-col items-center h-full justify-between pb-10 ">
            <div className="flex flex-col items-center justify-center pt-5 gap-4">
         
              <p className="text-[18px] text-black font-medium text-center ">
                Залишились питання ?
              </p>
              <p className="text-[18px] text-black font-medium text-center ">
                Не знаешь як долучитися?
              </p>
              <p className="text-[18px] text-black  text-center pt-7 ">
                Тисни кнопку бери участь і переходь до мого інстаграму, я все
                поясню😊
              </p>
            </div>

            <ActiveBlock />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
