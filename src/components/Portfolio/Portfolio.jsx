import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
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
          <a href="https://github.com/Pradeep-majji/Tour-Guide" target="_blank"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Pradeep-majji/health_care" target="_blank"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Pradeep-majji/Lab-Maintenance" target="_blank"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Pradeep-majji/Time-Table-Genertaor-Project" target="_blank"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Pradeep-majji/air_pollution" target="_blank"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Pradeep-majji/Portfolio" target="_blank"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
