import { useContext } from "react";
import Contact from "../Components/Contact";
import NavigationBar from "../Components/Navigation";
import Footer from "../Components/Footer";
import { DarkModeContext } from "../Context/darkmode";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const Contactpage = () => {

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { dark } = useContext(DarkModeContext) || {};
    return (
        <div>
            <header className="absolute top-0 left-0 w-full p-4 z-10">
                <NavigationBar />
            </header>

            <div className="relative">
                <img
                    src="/contact.jpg"
                    alt="placeholder"
                    className={`w-full h-[20rem] md:h-[30rem] object-cover object-top ${dark ? 'brightness-[0.3]' : 'brightness-50'}`}
                />
                {/* Adjust z-index and positioning to avoid blocking the navbar */}
                <div className="absolute top-10 left-0 w-full h-full flex items-center justify-center z-0">
                    <div className="flex flex-col items-center">
                        <h1 className={`text-[2.5rem] md:text-[4rem] font-medium text-[#CDE8E5]`}>Contact Us</h1>
                        <p className={`text-base md:text-[1.15rem] mt-4 md:mt-8 md:mx-80 text-center text-white`}>
                            We are here to help you. Feel free to reach out to us. We are available 24/7.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className={`flex flex-col justify-center items-center min-h-[125vh] ${dark ? "bg-[#1A1B1D]" : "bg-white"} text-white p-4 md:p-8`}>
                <div className={`w-full max-w-[69rem] mx-auto flex flex-col md:flex-row items-center rounded-lg ${dark ? 'bg-[#141415] text-white' : 'bg-slate-100 text-gray-700'}`}>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/2 p-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            CONTACT <span className="text-green-500">US</span>
                        </h2>
                        <p className="text-base md:text-lg mb-4">
                            445 Mount Eden Road, Mount Eden, Auckland.
                        </p>
                        <p className="text-base md:text-lg mt-4">support@sayt.az</p>
                        <p className="text-sm md:text-base mt-4 text-gray-400">
                            Have any questions? Feel free to reach out to us.
                            We are happy to help you. We are available 24/7.
                        </p>
                        <div className="flex items-center mt-4 pt-10">
                            <a href="#" className="mr-4 transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                                <FaFacebook size={36} color="#2A629A" />
                            </a>
                            <a href="#" className="mr-4 transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                                <AiFillInstagram size={40} color="#C13584" />
                            </a>
                            <a href="#" className="mr-4 transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                                <PiWhatsappLogoFill size={40} color="#25D366" />
                            </a>
                            <a href="#" className="mr-4 transition delay-150 duration-300 ease-in-out hover:scale-125 hover:translate-y-0">
                                <FaSquareXTwitter size={40} color="#686D76" />
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full md:w-1/2 p-6">
                        <div className="rounded-lg overflow-hidden shadow-lg h-[15rem] md:h-[20rem]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3499.041527194659!2d77.1114779400839!3d28.71830493532824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724035413544!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: "0" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className=" w-full">
                    <Contact />
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Scroll to Top Button */}
            <div onClick={handleScrollUp} className={`rounded-full ${dark ? 'bg-pink-800 bg-opacity-100' : 'bg-red-900'} w-12 h-12 p-2 fixed bottom-6 right-6 flex items-center justify-center cursor-pointer`}>
                <TbArrowBigUpLinesFilled size={24} className="text-white" />
            </div>
        </div>
    );
}

export default Contactpage;
