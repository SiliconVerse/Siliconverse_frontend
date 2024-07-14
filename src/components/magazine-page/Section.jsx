import { useState } from 'react';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import siliconQuotes from '../../assets/siliconQuotes.png';
import image from '../../assets/latestNews.png';
import headerImage from '../../assets/quotes.png';
import siliconQuote from '../../assets/siliconQuote.png';
import firstFigCap from '../../assets/latest2.png';
import secondFigCap from '../../assets/latest3.png';

const Section = () => {
  const [LatestNews, setLatestNews] = useState([
    {
      title: 'Ameachi Tech Hub to host Siliconverse meet up 2024',
      time: '1 minutes Ago',
      date: '29 April 2024',
      bgImage: image,
    },
    {
      title: 'Ameachi Tech Hub to host Siliconverse meet up 2024',
      time: '2 hours Ago',
      date: '29 April 2024',
      bgImage: image,
    },
    {
      title: 'Ameachi Tech Hub to host Siliconverse meet up 2024',
      time: '1 min Ago',
      date: '29 April 2024',
      bgImage: image,
    },
  ]);
  const [latestBlogs, setLatestBlogs] = useState([
    {
      figCaption: firstFigCap,
      figHeader: 'Say hello to the team behind airways app',
      figWho: 'By Victoria from:',
      figFrom: 'Hive Hub',
      figContent:
        'During the Tedx conference held at zaria, the team behind airways app came out and introduced',
    },
    {
      figCaption: secondFigCap,
      figHeader: 'Why you should study data science',
      figWho: 'By Samuel Muaks from:',
      figFrom: 'Code Guys',
      figContent:
        'Mr. Eric in his lecture at veritas university Abuja, told the students the need for them to study',
    },
    // YOU SHOULD COMMENT THESE OUT 👇👇👇👇
    // {
    //     figCaption: firstFigCap,
    //     figHeader: "Why you should study data science",
    //     figWho: "By Samuel Muaks from:",
    //     figFrom: "Code Guys",
    //     figContent: "Mr. Eric in his lecture at veritas university Abuja, told the students the need for them to study"
    // },
    // {
    //     figCaption: secondFigCap,
    //     figHeader: "Why you should study data science",
    //     figWho: "By Samuel Muaks from:",
    //     figFrom: "Code Guys",
    //     figContent: "Mr. Eric in his lecture at veritas university Abuja, told the students the need for them to study"
    // }
  ]);

  const handleMove = () => {
    latestBlogs[0] === latestBlogs[1];
    console.log(latestBlogs);
  };
  // const [spotLightName, setSpotLightName] = useState("Luka Davidi")
  return (
    <section className='bg-white space-y-6'>
      <div className='space-y-6 py-4 border-y border-y-[#FF5F15]'>
        <div className='flex gap-4 justify-between'>
          <button className='bg-[#FF5F15] py-[2px] px-8 text-white font-semibold hover:bg-orange-600'>
            Latest
          </button>
          <div className='flex items-center rounded-[50px] gap-2 py-2 px-6 w-[429px] max-[606px]:w-full border border-[#FF5F15]'>
            <FaSearch className='text-[#FF5F15] text-lg' />
            <input
              className='outline-none w-full'
              type='text'
            />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 max-[900px]:grid-cols-2  max-[580px]:grid-cols-1'>
          {LatestNews.map((latest, index) => (
            <div
              key={index}
              className='flex h-[200px] max-[300px]:h-fit w-full max-[300px]:flex-col'>
              <div
                style={{ backgroundImage: `url(${latest.bgImage})` }}
                className='h-full max-[300px]:h-[120px] w-[80%] max-[300px]:w-full bg-cover bg-center flex items-end'>
                <p className='bg-[#00000080] p-2 font-semibold text-white'>
                  {latest.title}
                </p>
                {/* <div className=" h-[20%] w-full"></div> */}
              </div>
              <div className='bg-[#FF5F15] flex flex-col max-[300px]:flex-row justify-between py-4 px-2'>
                <p className='text-white'>{latest.time}</p>
                <p className='text-white font-semibold'>{latest.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex max-[978px]:flex-col w-full'>
        <div className='border-r border-r-[#FF5F15] w-[65%] max-[978px]:w-full flex gap-6 flex-col items-center'>
          <div className='w-full flex flex-col items-center gap-2'>
            <div
              style={{ backgroundImage: `url(${headerImage})` }}
              className='mr-2 bg-cover bg-center h-[500px] w-full flex items-end'>
              <div className='bg-[#00000080] w-full h-[20%] flex justify-center items-center'>
                <button className='bg-[#FF5F15] hover:bg-[#FF5F1590] text-white font-semibold py-[3px] px-8 rounded-[10px]'>
                  Read
                </button>{' '}
              </div>
            </div>
            <div className='flex flex-col items-center w-[550px] max-[554px]:w-full'>
              <h2 className='text-xl font-bold'>
                How Colab became the first tech hub in kaduna, Nigeria
              </h2>
              <p className='text-sm'>
                By Yomie From <span className='text-[#FF5F15]'>Colab</span>
              </p>
              <p className='text-sm text-center'>
                Colab innovation hub is the first innovation hub in kaduna,
                nigeria, Colab nigeria Colab innovation hub is the first
                innovation hub in kaduna, nigeria
              </p>
            </div>
          </div>
          <div className='relative w-full flex gap-4 border-t border-t-[#FF5F15] pt-6'>
            {/* <div className="relative w-full grid grid-cols-2 gap-4 border-t border-t-[#FF5F15] pt-6"> */}
            {latestBlogs.map((blog, index) => (
              <div
                key={index}
                className='flex flex-col item-center gap-6'>
                <img
                  src={blog.figCaption}
                  alt=''
                />
                <div>
                  <p className='text-center text-lg font-bold'>
                    {blog.figHeader}
                  </p>
                  <p className='text-center font-semibold'>
                    {blog.figWho}
                    <span className='text-[#FF5F15]'>{blog.figFrom}</span>
                  </p>
                  <p className='text-center'>
                    {blog.figContent}{' '}
                    <span className='text-[#FF5F15]'>Read more...</span>
                  </p>
                </div>
              </div>
            ))}

            <div
              onClick={() => handleMove()}
              tabIndex={0}
              className='absolute bg-[#FF5F1580] hover:bg-[#FF5F1590] active:bg-[#FF5F1580] focus:bg-[#FF5F1590] h-full w-10 right-0 flex items-center justify-center'>
              <svg
                width='11'
                height='18'
                viewBox='0 0 11 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M2.0001 0L0.600098 1.5L8.0001 9L0.600098 16.5L2.0001 18L11.0001 9L2.0001 0Z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='w-[35%] max-[978px]:w-full max-[978px]:flex max-[978px]:gap-4 max-[978px]:mt-6 max-[678px]:flex-col max-[678px]:items-center max-[678px]:mt-10'>
          <div
            style={{ backgroundImage: `url(${siliconQuote})` }}
            className='ml-[46px] max-[978px]:ml-0 mb-10 bg-cover bg-center h-[500px] w-[90%] max-[978px]:w-[500px] max-[554px]:w-full flex items-end'>
            <div className='bg-[#FF5F15] w-full p-4'>
              <div>
                <h2 className='text-xl font-bold text-white'>
                  Siliconverse Spotlight
                </h2>
                <p className='text-white text-sm'>
                  Meet our spotlight talent of the week, Luka Davidi
                </p>
              </div>
              <p className='text-white text-sm'>Read More...</p>
            </div>
          </div>

          <div className='border-t border-t-[#FF5F15] w-full max-[978px]:w-[500px] max-[554px]:w-full max-[978px]:h-[500px]'>
            <div className='ml-[46px] max-[978px]:ml-0 w-[90%] max-[978px]:w-full max-[978px]:h-full'>
              <img
                src={siliconQuotes}
                className='max-[978px]:h-[80%]'
                alt=''
              />
              <div className='bg-[#FF5F15] w-full flex flex-col gap-2 pl-10 py-2'>
                <div>
                  <h2 className='text-white text-lg font-bold'>
                    Siliconverse Quote
                  </h2>
                  <p className='font-semibold text-white'>Quote of the day</p>
                </div>
                <p className='text-white'>Read More...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
