import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../Card/index.jsx';
import FirstPic from '../../assets/firstpic.svg';
import SecondPic from '../../assets/secondpic.svg';
import ThirdPic from '../../assets/thirdpic.svg';
import FourthPic from '../../assets/fourthpic.svg';
import './style.css';

const SwiperSegment = () => {
    const slides = [
        {
            img: FirstPic,
            name: 'Emeka Onyinyechi',
            role: 'Graphic Designer ',
            reviews:
                'Siliconverse has transformed my tech experience! The hands-on experience I gained made me more connected and productive in managing tasks, designing, and putting all my skill sets into practice. I highly recommend it to any aspiring techie seeking an internship or real-world experience. Thank you!',
        },
        {
            img: SecondPic,
            name: 'Victoria Nwokorie ',
            role: 'Project Manager',
            reviews:
                'When I joined silicon verse I didnt have practical knowledge of project management . But my time here has exposed me , enlightened me , enhanced my skill and I even met wonderful people who also helped me hone my skills and working with cross-functional teams has been so amazing .',
        },
        {
            img: ThirdPic,
            name: 'David Ajayi',
            role: 'UI/UX Designer',
            reviews:
                'As a product designer, I’ve had the opportunity to use various recruitment tools, but Siliconverse stands out as a game-changer in the industry. This platform has revolutionized the way companies connect with top talent, making the recruitment and selection process more efficient and effective.',
        },
        {
            img: FourthPic,
            name: 'Victor Onipinsaiye',
            role: 'Full-Stack Developer',
            reviews:
                'Silicon verse has helped me to learn how to collaborate with team members to deliver on task more efficiently. I strongly recommend self taught developers like me to join this space for speedy growth in their tech journey.',
        }
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
