import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../Card/index.jsx';
import FirstPic from '../../assets/Ellipse 8.svg';
import SecondPic from '../../assets/Ellipse 8 (1).svg';
import './style.css';

const SwiperSegment = () => {
    const slides = [
        {
            img: FirstPic,
            name: 'Emmanuel',
            role: 'Frontend Developer',
            reviews:
                'This program gave me the structured learning path I needed to excel in data analytics. I was able to master SQL and Python, and the hands-on projects helped me create meaningful data visualizations in Tableau.',
        },
        {
            img: SecondPic,
            name: 'Emmanuel',
            role: 'Frontend Developer',
            reviews:
                'Joining the accelerator program was a game-changer for my career in front-end development. Before, I had a basic understanding of HTML and CSS, but through the intensive, hands-on projects.......',
        },
        {
            img: FirstPic,
            name: 'Emmanuel',
            role: 'Frontend Developer',
            reviews:
                'Before the program, I was mostly a self-taught coder struggling to connect all the dots in full-stack development. This accelerator filled in all the gaps. I now understand the full-stack development....',
        },
        {
            img: FirstPic,
            name: 'Emmanuel',
            role: 'Frontend Developer',
            reviews:
                'As someone transitioning from IT support, this program equipped me with the skills to become a DevOps engineer. The in-depth modules on Docker and Kubernetes were especially........',
        },
        {
            img: FirstPic,
            name: 'Emmanuel',
            role: 'Frontend Developer',
            reviews: 'Working well',
        },
    ];

    return (
        <div className='slider-container'>
            <div className='swiper-button-prev slider-arrow'>
                <ion-icon name='arrow-back-outline'></ion-icon>
            </div>
            <div className='swiper-button-next slider-arrow'>
                <ion-icon name='arrow-forward-outline'></ion-icon>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000, // 3 seconds delay
                    disableOnInteraction: false, // Continue autoplay after interaction
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Card img={slide.img} name={slide.name} role={slide.role} reviews={slide.reviews} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='swiper-pagination'></div>
        </div>
    );
};

export default SwiperSegment;
