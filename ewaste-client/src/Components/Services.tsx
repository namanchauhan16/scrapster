import { useContext, useState } from "react";
import { DarkModeContext } from "../Context/darkmode";
import Modal from "./Modal";
import Ticketform from "./Ticketform";
import { HiTruck } from "react-icons/hi2";
import { MdOutlineRecycling } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const Services = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const { dark } = useContext(DarkModeContext) || {};

    const OpenModal = () => {
        setIsOpenModal(true);
    };

    const CloseModal = () => {
        setIsOpenModal(false);
    };

    const handleAboutPage = () => {
        window.location.href = "/about";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <section className="">
            <div className={`py-12 ${dark ? 'bg-[#141111EB]' : 'bg-gray-100'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2
                            className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                            Why choose us?
                        </h2>
                        <p className={`font-heading mt-2 text-[2.5rem] leading-8 font-medium tracking-tight ${dark ? 'text-gray-300' : 'text-gray-900'} sm:text-4xl`}>
                            Transforming Waste, Empowering Sustainability.
                        </p>
                        <p className={`mt-4 max-w-2xl text-lg ${dark ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
                            Efficiently managing and recycling e-waste to promote a sustainable environment, ensuring safe disposal and maximizing resource recovery.
                        </p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <HiTruck size={55} color={dark ? '#637A9F' : '#1F2544'} />
                                    </div>
                                    <p className={`font-heading ml-16 text-[1.4rem] leading-6 font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Transportation Services</p>
                                </dt>
                                <dd className={`mt-2 ml-16 text-base ${dark ? 'text-gray-400' : 'text-gray-500'} text-justify`}>
                                    Efficient and reliable transportation solutions designed for seamless delivery. Ensuring timely and secure handling of your e-waste every step of the way.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        {
                                            dark ? (
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" fill="#bcceeb"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0689 8.49993C20.2101 8.49999 20.3551 8.50005 20.5 8.49805V12.9999C20.5 16.7711 20.5 18.6568 19.3284 19.8283C18.1569 20.9999 16.2712 20.9999 12.5 20.9999H11.5C7.72876 20.9999 5.84315 20.9999 4.67157 19.8283C3.5 18.6568 3.5 16.7711 3.5 12.9999V8.49805C3.64488 8.50005 3.78999 8.49999 3.93114 8.49993H20.0689ZM9 11.9999C9 11.5339 9 11.301 9.07612 11.1172C9.17761 10.8722 9.37229 10.6775 9.61732 10.576C9.80109 10.4999 10.0341 10.4999 10.5 10.4999H13.5C13.9659 10.4999 14.1989 10.4999 14.3827 10.576C14.6277 10.6775 14.8224 10.8722 14.9239 11.1172C15 11.301 15 11.5339 15 11.9999C15 12.4658 15 12.6988 14.9239 12.8826C14.8224 13.1276 14.6277 13.3223 14.3827 13.4238C14.1989 13.4999 13.9659 13.4999 13.5 13.4999H10.5C10.0341 13.4999 9.80109 13.4999 9.61732 13.4238C9.37229 13.3223 9.17761 13.1276 9.07612 12.8826C9 12.6988 9 12.4658 9 11.9999Z" fill="#bcceeb"></path> </g></svg>
                                            ) : (
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" fill="#41444e"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0689 8.49993C20.2101 8.49999 20.3551 8.50005 20.5 8.49805V12.9999C20.5 16.7711 20.5 18.6568 19.3284 19.8283C18.1569 20.9999 16.2712 20.9999 12.5 20.9999H11.5C7.72876 20.9999 5.84315 20.9999 4.67157 19.8283C3.5 18.6568 3.5 16.7711 3.5 12.9999V8.49805C3.64488 8.50005 3.78999 8.49999 3.93114 8.49993H20.0689ZM9 11.9999C9 11.5339 9 11.301 9.07612 11.1172C9.17761 10.8722 9.37229 10.6775 9.61732 10.576C9.80109 10.4999 10.0341 10.4999 10.5 10.4999H13.5C13.9659 10.4999 14.1989 10.4999 14.3827 10.576C14.6277 10.6775 14.8224 10.8722 14.9239 11.1172C15 11.301 15 11.5339 15 11.9999C15 12.4658 15 12.6988 14.9239 12.8826C14.8224 13.1276 14.6277 13.3223 14.3827 13.4238C14.1989 13.4999 13.9659 13.4999 13.5 13.4999H10.5C10.0341 13.4999 9.80109 13.4999 9.61732 13.4238C9.37229 13.3223 9.17761 13.1276 9.07612 12.8826C9 12.6988 9 12.4658 9 11.9999Z" fill="#41444e"></path> </g></svg>
                                            )
                                        }
                                    </div>
                                    <p className={`font-heading ml-16 text-[1.4rem] leading-6 font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Collection Services
                                    </p>
                                </dt>
                                <dd className={`mt-2 ml-16 text-base ${dark ? 'text-gray-400' : 'text-gray-500'} text-justify`}>
                                    Providing efficient waste collection services while also serving as a reliable collector. Ensuring timely and professional handling of all your disposal needs.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        {
                                            dark ? (
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z" fill="#959ba3"></path> <path opacity="0.5" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z" fill="#959ba3"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z" fill="#959ba3"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z" fill="#959ba3"></path> </g></svg>
                                            ) : (
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z" fill="#1C274C"></path> <path opacity="0.5" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z" fill="#1C274C"></path> </g></svg>
                                            )
                                        }
                                    </div>
                                    <p className={`font-heading ml-16 text-[1.4rem] leading-6 font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Disposal Services
                                    </p>
                                </dt>
                                <dd className={`mt-2 ml-16 text-base ${dark ? 'text-gray-400' : 'text-gray-500'} text-justify`}>
                                    Connecting users with certified disposal experts for responsible and compliant waste management. Ensuring safe and efficient handling of all types of waste.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <MdOutlineRecycling size={50} color="#A4CE95" />
                                    </div>
                                    <p className={`font-heading ml-16 text-[1.4rem] leading-6 font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Recycling Services
                                    </p>
                                </dt>
                                <dd className={`mt-2 ml-16 text-base ${dark ? 'text-gray-400' : 'text-gray-500'} text-justify`}>
                                    Connecting users with certified legal recyclers for compliant and responsible disposal. Ensuring your waste is handled by trusted professionals.
                                </dd>
                            </div>
                        </dl>
                    </div>

                </div>
                <div className="flex justify-end mt-10 mr-5 md:mr-52">
                    <button onClick={OpenModal} className="text-gray-700 text-base font-normal py-2 px-7 rounded-full cursor-pointer bg-orange-300 transition-all duration-500 hover:bg-white hover:text-gray-900">
                        Schedule Pickup
                    </button>
                    <button onClick={handleAboutPage}  className="text-gray-200 text-base font-normal py-2 px-7 rounded-full cursor-pointer bg-[#4d4656] transition-all duration-500 hover:bg-white hover:text-gray-900 ml-4">
                        Learn More
                        <IoIosArrowRoundForward size={24} className="inline-block ml-1" />
                    </button>
                </div>
            </div>
            {
                <Modal isVisible={isOpenModal}>
                    <Ticketform closeModal={CloseModal} />
                </Modal>
            }
        </section>
    );
}

export default Services;