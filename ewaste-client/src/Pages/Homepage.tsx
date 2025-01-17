import { useContext, useState } from "react";
import NavigationBar from "../Components/Navigation";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Services from "../Components/Services";
import Faq from "../Components/Faq";
import Modal from "../Components/Modal";
import Ticketform from "../Components/Ticketform";
import { DarkModeContext } from "../Context/darkmode";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const Homepage = () => {

  const { dark } = useContext(DarkModeContext) || {};
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const OpenModal = () => {
    setIsOpenModal(true);
  };

  const CloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={dark ? "bg-[#1A1B1D]" : "bg-white"}>
      <header className="absolute top-0 left-0 w-full p-4 z-10">
        <NavigationBar />
      </header>

      <div className="relative">
        <img
          src="/background.webp"
          alt="placeholder"
          className={`w-full h-[20rem] md:h-[40rem] object-cover object-top blur-[3px] ${dark ? 'brightness-[0.3]' : 'brightness-50'}`}
        />
      </div>

      <div className="absolute top-10 left-0 w-full h-[20rem] md:h-[40rem] bg-gradient-to-b from-transparent to-black z-0">
        <div className="flex flex-col justify-center h-full text-white px-20">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Scrapster</h1>
          <p className="text-lg md:text-2xl mt-6 w-[42%]">
             Scrapster is a platform that connects you to the nearest scrap collector in your area. We help you dispose of your e-waste in an eco-friendly way.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button onClick={OpenModal} className="text-gray-700 text-base font-normal py-2 px-7 rounded-full cursor-pointer bg-orange-300 transition-all duration-500 hover:bg-white hover:text-gray-900">
              Schedule Pickup
            </button>
          </div>
        </div>
      </div>

      <About />
      <Services />
      {/* <Team /> */}
      <Testimonial />
      <Faq />
      {/* <Subscription /> */}
      <Contact />
      <Footer />
      <div onClick={handleScrollUp} className={`rounded-full ${dark ? 'bg-pink-800' : 'bg-red-900'} w-12 h-12 p-2 fixed bottom-6 right-6 flex items-center justify-center cursor-pointer`}>
        <TbArrowBigUpLinesFilled size={24} className="text-white" />
      </div>
      {
        <Modal isVisible={isOpenModal}>
          <Ticketform closeModal={CloseModal} />
        </Modal>
      }
    </div>
  );
};

export default Homepage;
