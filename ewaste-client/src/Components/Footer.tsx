import { useContext, useState } from "react";
import Modal from "./Modal";
import Ticketform from "./Ticketform";
import { DarkModeContext } from "../Context/darkmode";

const Footer = () => {
  const { dark } = useContext(DarkModeContext) || {};
  const [isOpenModal, setIsOpenModal] = useState(false);

  const OpenModal = () => {
    setIsOpenModal(true);
  };

  const CloseModal = () => {
    setIsOpenModal(false);
  };

  const handleFaq = () => {
    window.location.href = "/faq";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleContact = () => {
    window.location.href = "/contact";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleSubscription = () => {
    window.location.href = "/subscription";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleAbout = () => {
    window.location.href = "/about";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <section className={`pt-16 pb-7 ${dark ? 'bg-[#161617]' : 'bg-gray-200'}`}>
      <div className="mx-auto w-full md:max-w-[95rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between pb-14 border-b border-gray-500 gap-8">
          <div className="flex flex-col md:flex-row gap-16">
            <a href="#" >
              <div className="flex md:justify-center sm:justify-start">
                {
                  dark ? (
                    <img src="/logo.png" alt="logo" className="w-60" />
                  ) : (
                    <img src="/logoLight.png" alt="logo" className="w-60" />
                  )
                }
              </div>
            </a>
            <p className={`max-w-[70rem] mx-auto text-[0.8rem] md:text-[1rem] text-center text-justify ${dark ? 'text-gray-400' : 'text-gray-800'} sm:mx-0 sm:text-left`}>
              Scrapster is an innovative e-waste management system dedicated to helping you dispose of your electronic waste responsibly.
              Join us in making a positive impact on the environment by recycling your e-waste and contributing to a sustainable future.
              It is our mission to provide a safe and efficient solution for the disposal of electronic waste.
              Together, we can make a difference.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg md:text-[2.5rem] text-red-500 font-medium">Ready to Recycle ?</h3>
              <p className={`mt-2 text-[0.75rem] md:text-[1rem] ${dark ? 'text-gray-300' : 'text-gray-800'}`}>
                Schedule a pickup or find a drop-off location near you to responsibly dispose of your e-waste.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <button onClick={OpenModal} className="text-gray-700 text-base font-normal py-2 px-7 rounded-full cursor-pointer bg-red-300 transition-all duration-500 hover:bg-white hover:text-gray-900">
                  Schedule Pickup
                </button>
                <button className="text-gray-200 text-base font-normal py-2 px-7 rounded-full cursor-pointer bg-[#8C3061] transition-all duration-500 hover:bg-white hover:text-gray-900">
                  Find Drop-off
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[25%]">
              <h1 className="text-lg md:text-[1.2rem] text-red-500 font-medium">Contact Us : </h1>
              <ul className="flex gap-6 items-center mr-12">
                <li className="transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                  <a href="https://www.facebook.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9 text-blue-500">
                      <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.02 3.66 9.17 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.84c0-2.5 1.47-3.88 3.72-3.88 1.08 0 2.2.19 2.2.19v2.43h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85h2.72l-.43 2.89h-2.29V21.9C18.34 21.17 22 17.02 22 12z" />
                    </svg>
                  </a>
                </li>
                <li className="transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                  <a href="https://www.instagram.com" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#A91D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </li>
                <li className="transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                  <a href="https://www.twitter.com" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#4D869C" stroke="#4D869C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </li>
                <li className="transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                  <a href="https://www.twitch.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#AD49E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitch">
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
                    </svg>
                  </a>
                </li>
                <li className="transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                  <a href="https://www.youtube.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9 text-red-500">
                      <path d="M22.54 6.42a2.75 2.75 0 0 0-1.93-1.94C18.83 4 12 4 12 4s-6.83 0-8.61.48A2.75 2.75 0 0 0 1.46 6.42C1 8.2 1 12 1 12s0 3.8.46 5.58a2.75 2.75 0 0 0 1.93 1.94c1.78.48 8.61.48 8.61.48s6.83 0 8.61-.48a2.75 2.75 0 0 0 1.93-1.94C23 15.8 23 12 23 12s0-3.8-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-8 flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-500">
          <div className="w-full max-lg:mx-auto flex flex-col grid grid-cols-2 lg:flex lg:flex-row max-lg:items-center max-lg:justify-between gap-6 md:gap-12 lg:gap-24">
            <div className="">
              <h4 className="text-[1.3rem] text-red-500 font-medium mb-7 max-lg:text-center">Helpful Link</h4>
              <ul className="flex flex-col max-lg:items-center gap-6">
                <li>
                  <button onClick={handleAbout} className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`}>
                    About
                  </button>
                </li>
                <li>
                  <button onClick={handleSubscription} className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`}>
                    Subscription
                  </button>
                </li>
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`} href="/">
                    Blogs
                  </a>
                </li>
                <li>
                  <button onClick={handleContact} className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-[1.3rem] text-red-500 font-medium mb-7 max-lg:text-center">Services</h4>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`} href="/">
                    Collection
                  </a>
                </li>
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`} href="/">
                    Disposal
                  </a>
                </li>
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`} href="/">
                    Transportation
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-[1.3rem] text-red-500 font-medium mb-7 max-lg:text-center">Resources</h4>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <button onClick={handleFaq} className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`}>
                    FAQs
                  </button>
                </li>
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`} href="/">
                    Support
                  </a>
                </li>
                <li>
                  <a className="flex group justify-center sm:justify-start gap-1.5" href="/">
                    <span className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'}`}>
                      Live Chat
                    </span>
                    <span className="relative flex w-2 h-2 -mr-2">
                      <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                      <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-[1.3rem] text-red-500 font-medium mb-7 max-lg:text-center">Contact</h4>
              <ul className="flex flex-col gap-6 max-lg:items-center">
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'} flex gap-2`} href="mailto:abc@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke='#708871' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><path d="m16 19 2 2 4-4" /></svg>
                    abc@gmail.com
                  </a>
                </li>
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'} flex gap-2`} href="tel:+1234567890">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#708871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                    +123 456 7890
                  </a>
                </li>
                <li>
                  <a className={`${dark ? 'text-white transition hover:text-white/75' : 'text-gray-800 transition hover:text-gray-500'} flex gap-2`} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#708871" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                    1234 Street Name, City Name
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:max-w-md max-lg:mx-auto ">
            <h6 className={`text-[1.5rem] font-medium mx-4  ${dark ? 'text-white' : 'text-gray-700'}`}>Subscribe to our Newsletter</h6>
            <p className="text-gray-600 mb-4 text-justify ml-4 mr-6">
              Subscribe to this weekly newsletter so you don’t miss out on the new hot tech topics.
            </p>
            <div className={`${dark ? 'bg-gray-800 shadow-white' : 'bg-[#E2DAD6] shadow-black shadow-2xl'} rounded-[1.5rem] p-5`}>
              <form action="#" className="flex flex-col gap-5">
                <div className="relative">
                  <label className={`flex items-center mb-2 ml-2 text-base font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Email
                  </label>
                  <input type="text" id="default-search"
                    className={`block w-full px-5 py-1 bg-gray-200 text-lg font-normal shadow-xs text-gray-900 border border-gray-400 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed focus-within:border-gray-300`}
                    placeholder="abc@gmail.com" required />
                </div>
                <div className="flex flex-col min-[540px]:flex-row items-center justify-between gap-3">
                  <div className="flex items-start black">
                    <input id="checked-checkbox" type="checkbox" value=""
                      className={`h-[1.2rem] aspect-square appearance-none cursor-pointer border border-gray-600 bg-transparent rounded-full mr-2 hover:border-gray-40 checked:bg-no-repeat checked:bg-center checked:border-gray-400  ${dark ? 'checked:bg-gray-200' : 'checked:bg-gray-800'}`} checked />
                    <label htmlFor="checked-checkbox" className="text-sm font-normal cursor-pointer text-gray-400">
                      I agree with <a href="javascript:;" className="text-amber-500">Privacy Policy</a> and <a
                        href="javascript:;" className="text-amber-500">Terms of Condition</a></label>
                  </div>
                  <input type="submit" value="Send"
                    className={`${dark ? 'bg-red-400 text-gray-800' : 'bg-red-400 text-white'} text-base font-normal py-2 px-7 rounded-full cursor-pointer  transition-all duration-500 hover:bg-white hover:text-gray-900`} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
          <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className={`font-semibold ${dark ? 'text-blue-100' : 'text-blue-500'} text-[1.2rem]`}>
              &copy;
            </span>{" "}
            2024 Scrapster. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-10">
            <a href="#" target="_blank" rel="noreferrer" className={`group ${dark ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 ease-in-out`}>
              <span className={`bg-left-bottom ${dark ? 'bg-gradient-to-r from-[#ffd89b] to-[#004e92]' : 'bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]'} bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}>
                Privacy Policy
              </span>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className={`group ${dark ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 ease-in-out`}>
              <span className={`bg-left-bottom ${dark ? 'bg-gradient-to-r from-[#ffd89b] to-[#004e92]' : 'bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]'} bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}>
                Terms of Service
              </span>
            </a>
          </div>
        </div>
      </div>
      {
        <Modal isVisible={isOpenModal}>
          <Ticketform closeModal={CloseModal} />
        </Modal>
      }
    </section>
  )
};

export default Footer;