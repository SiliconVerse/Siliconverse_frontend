import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slides from '../mock.json';

export const Slider = () => {
  // Define card styles
  const cardStyles = {
    width: "auto",
    height: "auto",
    border: '2px solid #ededed ',
    borderRadius: '15px',
    padding: "1.3rem",
    fontSize: "24px",
  };

  const titleStyles = {
    color: "#000",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, // Continue autoplay after interaction
      }}
      // navigation
      // loop=[true]
      breakpoints={{
        640: {
          slidesPerView: 1, // 1 slide for screens >= 640px
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1, // 1 slide for screens >= 768px
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3, // 3 slides for screens >= 1024px
          spaceBetween: 30,
        },
      }}
    >
      {Slides.map((item) => (
        <SwiperSlide key={item.id}>
          <div style={cardStyles}>
            <div className="card-body">
              <strong style={titleStyles}>{item.title}</strong>
              <p>{item.titleOne}</p>
              <ul>
                <li>{item.cont1}</li>
                <li>{item.cont2}</li>
                <li>{item.cont3}</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
