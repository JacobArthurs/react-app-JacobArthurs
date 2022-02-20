import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, FreeMode } from "swiper";
import "swiper/swiper-bundle.css";
import "./Skills.css";
import aspnet from "../../images/carousel/aspnet.png";
import bootstrap from "../../images/carousel/bootstrap.png";
import csharp from "../../images/carousel/csharp.png";
import css from "../../images/carousel/css.png";
import git from "../../images/carousel/git.png";
import html from "../../images/carousel/html.png";
import java from "../../images/carousel/java.png";
import jQuery from "../../images/carousel/jQuery.png";
import js from "../../images/carousel/js.png";
import kotlin from "../../images/carousel/kotlin.png";
import mysql from "../../images/carousel/mysql.png";
import node from "../../images/carousel/node.png";
import swift from "../../images/carousel/swift.png";
import vs from "../../images/carousel/vs.png";
import react from "../../images/carousel/react.png";
import msSQL from "../../images/carousel/msSQL.png";

const Skills = () => {
  SwiperCore.use([Autoplay, FreeMode]);
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="Skills" className="row">
      <div
        className="skillsBackground"
        style={{ transform: `translateY(${-offSetY * 0.5}px)` }}
      ></div>
      <h1 className="skillsTitle">Technical Skills</h1>
      <div className="swiperContainer">
        <Swiper
          id="topSwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          freeMode={{ enabled: true }}
          noSwiping={true}
          noSwipingClass={"swiper-slide"}
          loop
          speed={4000}
          breakpoints={{
            850: { slidesPerView: 4 },
            0: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide>
            <img src={aspnet} alt="ASP.Net" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={react} alt="React.js" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={js} alt="JavaScript" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={html} alt="HTML" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={css} alt="CSS" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={git} alt="Git Source Control" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={node} alt="Node.js" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={java} alt="Java" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          id="bottomSwiper"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          freeMode={{ enabled: true }}
          loop
          speed={4000}
          noSwiping={true}
          noSwipingClass={"swiper-slide"}
          breakpoints={{
            850: { slidesPerView: 4 },
            0: { slidesPerView: 2 },
          }}
        >
          <SwiperSlide>
            <img src={csharp} alt="C#" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={jQuery} alt="jQuery" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mysql} alt="mySQL" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={msSQL} alt="Microsoft SQL Server" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={vs} alt="Visual Studio" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swift} alt="Swift" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={kotlin} alt="Kotlin" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bootstrap} alt="Bootstrap" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Skills;
