import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects &</span>
      <span>Internship Works</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/Majjimanohar7989/AGE_GENDER_PREDECTION" target="_blank"><img src={'https://tse2.explicit.bing.net/th?id=OIP.CZTxFuGBR-ig74pwhO6J6QHaEK&pid=Api&P=0&h=180'} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Majjimanohar7989/Portfolio" target="_blank"><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeKpeAZbdGKC-C385OYRHXBE2HqMfi89-9Q&usqp=CAU'} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Pradeep-majji/Lab-Maintenance" target="_blank"><img src={'https://tse2.mm.bing.net/th?id=OIP.c_EDBpSvGyRw9Vr15vmCuAHaEK&pid=Api&P=0&h=180'} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Pradeep-majji/health_care" target="_blank"><img src={'https://tse4.mm.bing.net/th?id=OIP.Fq8s2VRG1cQ3fQbKAaJ_IgHaEK&pid=Api&P=0&h=180'} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
