// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image from '../assests/img.png';


// const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 20,
//     slidesToShow: 1,
//     slidesToScroll: 1,
    
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <img src={Image} alt="Image 1" />
//       </div>
//       <div>
//       <img src={Image} alt="Image 1" />
//       </div>
//       <div>
//       <img src={Image} alt="Image 1" />
//       </div>
//     </Slider>
//   );
// };

// export default SimpleSlider;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../assests/img.png';

const CarSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div>
        <h1 className='text-blue-500 text-3xl font-bold px-8 py-2'> New </h1>
        <h2 className='text-2xl font-bold px-14'> Cars</h2>
      </div>
      <div className='mt-6'>
      <Slider {...settings}>
        <div>
          <img src={Image} alt="Car 1" />
        </div>
        <div>
        <img src={Image} alt="Car 2" />
        </div>
        <div>
        <img src={Image} alt="Car 3" />
        </div>
        <div>
        <img src={Image} alt="Car 4" />
        </div>
      </Slider>
      </div>
    </div>

  );
};

export default CarSlider;
