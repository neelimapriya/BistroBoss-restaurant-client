import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
        <SectionTitle subHeading={"From 11:00am to 10:00pm"} heding={"Order Online"}></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white  font-sans mb-20"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h2 className="text-2xl drop-shadow-xl text-center uppercase -mt-12">salads</h2></SwiperSlide>

        <SwiperSlide><img src={slide2} alt="" /> <h2 className="text-2xl text-center uppercase -mt-12">pizza</h2></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /> <h2 className="text-2xl text-center uppercase -mt-12">soup</h2></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /> <h2 className="text-2xl text-center uppercase -mt-12">desserts</h2></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /> <h2 className="text-2xl text-center uppercase -mt-12">salads</h2></SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default Category;
