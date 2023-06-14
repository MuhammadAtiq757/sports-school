import slide1 from '../../../../../public/images/slide-1.jpg';
import slide2 from '../../../../../public/images/slide-2.jpg';
import slide3 from '../../../../../public/images/slide-3.jpg';
import slide4 from '../../../../../public/images/slide-4.jpg';

const Banner = () => {
  const slideTitles = [
    "Yoga is a holistic practice that combines physical postures, breathing exercises.",
    "Yoga is a holistic practice that combines physical postures, breathing exercises.",
    "Yoga is a holistic practice that combines physical postures, breathing exercises.",
    "Yoga is a holistic practice that combines physical postures, breathing exercises."
  ];

  return (
    <div className="w-full">
      <div className="carousel w-full h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img className="w-full" src={slide1} alt="Slide 1" />
          <h3 className="absolute text-yellow-100 mt-36  mx-8 top-2 left-2  text-3xl w-[40%] ml-12 font-extrabold text-black">{slideTitles[0]}</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2} className="w-full" alt="Slide 2" />
          <h3 className="absolute mt-36 text-yellow-100  mx-8 top-2 left-2  text-3xl w-[40%] ml-12 font-extrabold text-black">{slideTitles[1]}</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3} className="w-full" alt="Slide 3" />
          <h3 className="absolute text-yellow-100 mt-36  mx-8 top-2 left-2  text-3xl w-[40%] ml-12 font-extrabold text-black">{slideTitles[2]}</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide4} className="w-full" alt="Slide 4" />
          <h3 className="absolute text-yellow-100 mt-36  mx-8 top-2 left-2  text-3xl w-[40%] ml-12 font-extrabold text-black">{slideTitles[3]}</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
