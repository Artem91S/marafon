import React from "react";
import Hero from "./../../assets/_1.png";
import Clouds from "./../../assets/about_clouds.png";
import { FaInstagram } from "react-icons/fa6";

function About() {
  return (
    <section className="mx-6">
      <h3 className="text-[20px]">Твоя незмінна тренерка та засновниця</h3>
      <div className="flex">
        <div className=" relative  ">
          <img src={Hero} alt="hero" />
          <img src={Clouds} alt="cloud" className=" absolute bottom-0" />
        </div>
        <div className="flex-2">
          <div className=" flex gap-3">
            <FaInstagram className="text-[30px]"/>
            <h3>Анна Бурнышева </h3>
          </div>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            dolores!
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, ipsa sit
        fugit quibusdam eveniet amet eius vero cum sapiente vel.
      </p>
    </section>
  );
}

export default About;
