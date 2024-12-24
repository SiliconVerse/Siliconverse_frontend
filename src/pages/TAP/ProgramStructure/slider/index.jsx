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
    // disabled the pagination because it displays more bullets than there are items on mobile
    // pagination={{ clickable: true }} 
    spaceBetween={10}
    slidesPerView={1} // Always show 3 slides per group
    slidesPerGroup={1} // Treat 3 slides as one group for pagination
    loop={true} // Enable looping for consistent pagination
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
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
