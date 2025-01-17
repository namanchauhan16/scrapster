import { useContext } from "react";
import { DarkModeContext } from "../Context/darkmode";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const about = [
    { image: "/about1.webp" },
    { image: "/about2.webp" }
]

const About = () => {
    const { dark } = useContext(DarkModeContext) || {};

    const handleAboutPage = () => {
        window.location.href = "/about";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="flex flex-col md:flex-row items-center w-full px-4 md:px-52 my-12 gap-8 md:gap-20">
            <div className="flex flex-col justify-center w-full md:w-1/2">
                <h1 className={`text-[2.5rem] md:text-[3rem] font-semibold ${dark ? 'text-gray-200' : 'text-gray-700'}`}>About Us</h1>
                <p className={`text-base md:text-[1.15rem] mt-4 md:mt-5 text-justify ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris.
                </p>
                <button onClick={handleAboutPage} className={`mt-4 md:mt-5 px-4 py-2 w-full md:w-[10rem] rounded-full bg-[#4d4656] text-gray-200 transition-all duration-500 hover:bg-white hover:text-gray-900`}>
                    Learn More
                    <IoIosArrowRoundForward size={24} className="inline-block ml-1" />
                </button>
            </div>
            <div className="w-full md:w-1/2">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    loop={true}
                    className="w-full h-[25rem] md:w-[38rem] md:h-[25rem]"
                >
                    {
                        about.map((item, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center w-full h-full">
                                <img src={item.image} alt="about" className={`w-[80rem] object-cover ${dark ? 'brightness-[0.5]':'brightness-75'}`} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default About;
