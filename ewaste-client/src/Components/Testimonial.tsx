import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';
import { DarkModeContext } from "../Context/darkmode";

const testimonial = [
  {
    "id": 1,
    "name": "Kate Bishop",
    "image": "https://randomuser.me/api/portraits/women/40.jpg",
    "designation": "Software Engineer",
    "rating": 3,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nullam nec purus nec purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nullam nec purus nec purus."
  },
  {
    "id": 2,
    "name": "Clint Barton",
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "designation": "FreeLancer",
    "rating": 4,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nullam nec purus nec purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nullam nec purus nec purus."
  },
  {
    "id": 3,
    "name": "Natasha Romanoff",
    "image": "https://randomuser.me/api/portraits/women/50.jpg",
    "designation": "Software Engineer",
    "rating": 2,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nullam nec purus nec purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Nullam nec purus nec purus."
  }
]

const Testimonials = () => {

  const { dark } = useContext(DarkModeContext) || {};

  return (
    <div className={`${dark ? 'bg-[#141111EB]' : 'bg-[#EEEEEE50]'} w-full px-4 py-8 md:px-40 md:py-12 lg:px-56 lg:py-16 flex flex-col lg:flex-row`}>
      <div className="flex flex-col justify-center my-8 w-full lg:w-[40%]">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold max-w-md mx-auto  ${dark ? 'text-white' : 'text-gray-800'}`}>Here's what our
          <span className={`${dark ? 'text-[#45B3BA]' : 'text-[#26577C]'}`}> customers</span> have to say
        </h2>
        <p className={`text-lg font-normal mt-6 ${dark ? 'text-slate-400/70' : 'text-slate-700'}`}>
        Trusted voices, real experiences. See what our customers say about working with us.
        </p>
      </div>
      <div className="hidden lg:block mx-[3rem]">
        <hr className={`w-1 h-[3rem] ${dark ? 'bg-[#FF6969]' : 'bg-[#2F3645]'} mx-auto mb-[0.3rem] rounded-lg bg-[#A91D3A]`} style={{ borderTopWidth: '0px' }} />
        <hr className="w-1 h-[9rem] bg-[#2F3645] mx-auto rounded-lg bg-gray-400" style={{ borderTopWidth: '0px' }} />
        <hr className={`w-1 h-[3rem] ${dark ? 'bg-[#FF6969]' : 'bg-[#2F3645]'} mx-auto mt-[0.3rem] rounded-lg bg-[#A91D3A]`} style={{ borderTopWidth: '0px' }} />
      </div>
      <div className={`flex gap-[1rem] lg:gap-[2rem] w-full lg:w-[60%] shadow-2xl rounded-lg px-4 py-2 ${dark ? 'bg-[#222222] text-[#EEEDEB]' : 'bg-white text-gray-800'}`}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {testimonial.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="w-full flex flex-col"
            >
              <div className="flex items-start justify-center lg:justify-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full p-4 w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]"
                />
                <div className="ml-4 flex flex-col items-start mt-[1rem] md:mt-[1.45rem]">
                  <h3 className={`text-[1.2rem] md:text-[1.5rem] ${dark ? 'text-[#EEEDEB]' : 'text-gray-800'}`}>
                    {testimonial.name}
                  </h3>
                  <h4
                    className={`text-[1rem] ${dark ? 'text-gray-400' : 'text-gray-500'}`}
                    style={{ lineHeight: "1.02rem" }}
                  >
                    {testimonial.designation}
                  </h4>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating
                          ? "text-yellow-300"
                          : dark
                            ? "text-gray-500"
                            : "text-gray-300"
                          } ms-1`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className={`text-[1rem] md:text-[1.1rem] ${dark ? 'text-gray-400' : 'text-gray-800'}`}>
                  "{testimonial.comment}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

