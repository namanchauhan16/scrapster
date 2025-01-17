import Footer from "../Components/Footer";
import Team from "../Components/Team";
import { useContext } from "react";
import { DarkModeContext } from "../Context/darkmode";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { IoIosArrowDropright } from "react-icons/io";
import NavigationBar from "../Components/Navigation";
import Blogs from "../Components/Blogs";

const Aboutpage = () => {

    const { dark } = useContext(DarkModeContext) || {};

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`${dark ? "bg-[#1A1B1D]" : "bg-white"}`}>
            {/* Add z-index to ensure the navigation bar is on top */}
            <header className="absolute top-0 left-0 w-full p-4 z-10">
                <NavigationBar />
            </header>

            <div className="relative">
                <img
                    src="/contact.jpg"
                    alt="placeholder"
                    className={`w-full h-[20rem] md:h-[30rem] object-cover object-top blur-[3px] ${dark ? 'brightness-[0.3]' : 'brightness-50'}`}
                />
                {/* Adjust z-index and positioning to avoid blocking the navbar */}
                <div className="absolute top-10 left-0 w-full h-full flex items-center justify-center z-0">
                    <div className="flex flex-col items-center">
                        <h1 className={`text-[2.5rem] md:text-[4rem] font-medium text-[#CDE8E5]`}>About Us</h1>
                        <p className={`text-base md:text-[1.15rem] mt-4 md:mt-8 md:mx-80 text-center text-white`}>
                            We are a team of passionate individuals dedicated to promoting recycling and sustainability. Our mission is to reduce waste, conserve natural resources, and create a cleaner, greener environment for future generations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  items-center w-full px-4 md:px-52 my-12 gap-12">
                <div className="flex flex-col w-full px-4 my-12 gap-4">
                    <h1 className={`text-[2.5rem] md:text-[3rem] font-semibold ${dark ? 'text-gray-200' : 'text-gray-700'}`}>Our Mission</h1>
                    <p className={`text-base md:text-[1.15rem] mt-4 md:mt-5 text-justify ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>
                            Our mission is to reduce waste, conserve natural
                            resources, and create a cleaner, greener environment for future
                            generations. By providing a convenient way to recycle unwanted items
                            and materials, we hope to inspire positive change and encourage
                            responsible consumption habits.
                        </p>
                        <p>
                            At <strong className="text-[#55679C]">Scrapster</strong>, we believe that every small action counts and that
                            together, we can make a big difference. Join us in our mission to
                            promote recycling and sustainability, and help create a more
                            sustainable future for all.
                            <br />
                            <br />
                            Together, let's work towards a cleaner, greener future for all.
                        </p>
                    </p>
                </div>
                <div className="flex flex-col items-center w-full px-4 my-12 gap-4">
                    <img src="/about3.webp" alt="about" className="w-full h-96 object-cover rounded-lg" />
                </div>
            </div>
            <div className={`flex flex-col md:flex-row  items-center w-full px-4 md:px-20 my-20 md:mx-40 gap-12 ${dark ? 'shadow-gray-600':'shadow-black shadow-2xl rounded-tl-[2rem]'} md:w-[80%] rounded-br-[2rem]`}>
                <div className="flex  flex-col w-full px-4 gap-4 my-8">
                    <h1 className={`text-[2.5rem] md:text-[3rem] font-semibold ${dark ? 'text-gray-200' : 'text-gray-700'}`}>Our Values</h1>
                    <p className={`text-base md:text-[1.15rem] mt-4 md:mt-5 text-justify ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>
                            At <strong className="text-[#55679C]">Scrapster</strong>, we are guided by a set of core values that
                            define who we are and how we operate. These values shape our
                            decisions, actions, and interactions with others, and help us stay
                            true to our mission and vision.
                        </p>
                        <p className="mt-4">
                            <span className="font-semibold text-[#55679C]">
                            Our values include:
                            </span>
                            <ul className="list-none list-outside ml-8 mt-2 md:w-[60%]">
                                <li>
                                    <IoIosArrowDropright size={20} className={`inline-block mr-2 ${dark ? 'text-[#B3E2A7]':'text-[#40A578]'}`} />
                                    Environmental Stewardship
                                    <p className={`${dark ? 'text-gray-400':'text-[#666666]'} text-[0.96rem] ml-7 mb-2`}>
                                        We are committed to protecting the environment and conserving natural resources.
                                    </p>
                                </li>
                                <li>
                                    <IoIosArrowDropright size={20} className={`inline-block mr-2 ${dark ? 'text-[#B3E2A7]':'text-[#40A578]'}`} />
                                    Community Engagement
                                    <p className={`${dark ? 'text-gray-400':'text-[#666666]'} text-[0.96rem] ml-7 mb-2`}>
                                        We believe in building strong, collaborative relationships with our community partners.
                                    </p>
                                </li>
                                <li>
                                    <IoIosArrowDropright size={20} className={`inline-block mr-2 ${dark ? 'text-[#B3E2A7]':'text-[#40A578]'}`} />
                                    Innovation
                                    <p className={`${dark ? 'text-gray-400':'text-[#666666]'} text-[0.96rem] ml-7 mb-2`}>
                                        We constantly strive to push the boundaries of what's possible, delivering cutting-edge solutions to our clients.
                                    </p>
                                </li>
                                <li>
                                    <IoIosArrowDropright size={20} className={`inline-block mr-2 ${dark ? 'text-[#B3E2A7]':'text-[#40A578]'}`} />
                                    Integrity
                                    <p className={`${dark ? 'text-gray-400':'text-[#666666]'} text-[0.96rem] ml-7 mb-2`}>
                                        We are committed to honesty, transparency, and ethical conduct in all our dealings.
                                    </p>
                                </li>
                                <li>
                                    <IoIosArrowDropright size={20} className={`inline-block mr-2 ${dark ? 'text-[#B3E2A7]':'text-[#40A578]'}`} />
                                    Collaboration
                                    <p className={`${dark ? 'text-gray-400':'text-[#666666]'} text-[0.96rem] ml-7 mb-2`}>
                                        We believe in the power of teamwork and collaboration to achieve our goals.
                                    </p>
                                </li>
                            </ul>
                            <br />
                            These values guide us in everything we do and inspire us to work
                            towards a more sustainable future for all. Join us in living out
                            these values and help create a better world for future generations.
                        </p>
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center w-full px-4 md:px-52 my-20 gap-12">
                <div className="flex flex-col items-center w-full px-4 gap-4">
                    <img src="/about4.webp" alt="about" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <div className="flex flex-col w-full px-4 gap-4">
                    <h1 className={`text-[2.5rem] md:text-[3rem] font-semibold ${dark ? 'text-gray-200' : 'text-gray-700'}`}>Our Vision</h1>
                    <p className={`text-base md:text-[1.15rem] mt-4 md:mt-5 text-justify ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <p>
                            Our vision is to create a world where waste is seen as a valuable
                            resource and where recycling is the norm. We envision a future where
                            people are more mindful of their consumption habits and take
                            responsibility for their waste.
                        </p>
                        <p>
                            At <strong className="text-[#55679C]">Scrapster</strong>, we are committed to promoting a culture of
                            sustainability and environmental stewardship. We believe that by
                            working together, we can create a more sustainable future for all.
                            <br />
                            <br />
                            Join us in our vision for a cleaner, greener world.
                        </p>
                    </p>
                </div>
            </div>
            <Team />
            <Blogs />
            <Footer />
            <div onClick={handleScrollUp} className={`rounded-full ${dark ? 'bg-pink-800' : 'bg-red-900'} w-12 h-12 p-2 fixed bottom-6 right-6 flex items-center justify-center cursor-pointer`}>
                <TbArrowBigUpLinesFilled size={24} className="text-white" />
            </div>
        </div>
    );
}

export default Aboutpage;