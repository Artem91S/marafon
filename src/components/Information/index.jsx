import React from "react";
import { IoClose } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import { linkInsta } from "../utils/variables";
import ListOfProperties from "./ListOfProperties";
const successInform = [
  {
    id: 1,
    text: "successInformTextFirst",
  },
  {
    id: 2,
    text: "successInformTextSecond",
  },
  {
    id: 3,
    text: "successInformTextThird",
  },
  {
    id: 4,
    text: "successInformTextFourth",
  },
];

const cancelInform = [
  {
    id: 1,
    text: "cancelInformeTextFirst",
  },
  {
    id: 2,
    text: "cancelInformTextSecond",
  },
  {
    id: 3,
    text: "cancelInformTextThird",
  },
];

function Information() {
  const { t } = useTranslation();
  return (
    <Container classNameBlock={"gap-3 bg-[#eee]"}>
      <div className=" lg:flex lg:gap-10">
        <ListOfProperties
          title={t("description.successInformTitle")}
          data={successInform}
          icon={<GiCheckMark className="text-[20px] sm:text-[30px] " />}
        />
        <ListOfProperties
          title={t("description.cancelInformTitle")}
          data={cancelInform}
          icon={<IoClose className="text-[20px] sm:text-[30px] " />}
        />
      </div>

      <div className="flex flex-col gap-4 ">
        <p className="text-black/40 text-[12px]  sm:text-[16px]   ">
          *{t("description.informationDescription")}
        </p>
        <div className=" sm:flex flex-col  gap-4">
          <p className="text-black/40 text-[12px] sm:text-[16px]  ">
            {t("description.informationSubdescription")}
          </p>
          <a
            href={linkInsta}
            target="_blank"
            className="text-black/40 hover:text-black/70 text-[12px] sm:text-[16px] font-bold "
          >
            {t("description.AnnName")}
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Information;
