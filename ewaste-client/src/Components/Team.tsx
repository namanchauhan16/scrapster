import { useContext } from "react";
import { DarkModeContext } from "../Context/darkmode";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const TeamMember = [
    {
        name: "Shivam",
        role: "FullStack Developer",
        img: "/Images/4.webp",
        social: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: " https://www.github.com/"
        }
    },
    {
        name: "Tarun Kumar",
        role: "FullStack Developer",
        img: "/Images/3.webp",
        social: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: " https://www.github.com/"
        }
    },
    {
        name: "Naman Chauhan",
        role: "Backend Developer",
        img: "/Images/1.webp",
        social: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: " https://www.github.com/"
        }
    },
    {
        name: "Saumya kathuria",
        role: "Frontend Developer",
        img: "/Images/2.webp",
        social: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: " https://www.github.com/"
        }
    }
]

const Team = () => {

    const { dark } = useContext(DarkModeContext) || {};

    return (
        <div>
            <h1 className={`text-center font-semibold text-[2rem] mt-10 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                Meet Our
                <span className="text-[#CE5A67]"> Team</span>
            </h1>
            <p className={`text-center text-[1.2rem] mx-2 mt-2 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                We are a team of passionate developers who are commited to provide the best solution to our clients.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between p-3 mx-10 md:mx-52 my-12 md:h-[18rem]">
                {
                    TeamMember.map((member, index) => (
                        <div key={index} className="rounded-xl overflow-hidden relative text-center p-6 group items-center flex flex-col w-[15rem] hover:shadow-2xl transition-all duration-500 shadow-xl">
                            <section className="flex justify-center items-center w-36 h-36 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
                                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full" />
                            </section>
                            <div className="group-hover:pb-10 transition-all duration-500 delay-200 mt-4">
                                <h1 className={`font-semibold ${dark ? 'text-gray-300' : 'text-gray-700'} text-[1.4rem]`}>{member.name}</h1>
                                <p className={`${dark ? 'text-gray-400' : 'text-gray-500'} text-sm text-[1.2rem]`}>{member.role}</p>
                            </div>
                            <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                                <div className={`flex gap-3 text-2xl ${dark ? 'bg-[#1F1717]' : 'bg-gray-900'} text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm`}>
                                    <a className="hover:scale-110 transition-all duration-500 delay-200 cursor-pointer">
                                        <BsFacebook size={24} color="#6895D2" />
                                    </a>
                                    <a className="hover:scale-110 transition-all duration-500 delay-200 cursor-pointer">
                                        <RiInstagramFill size={24} color="#F77737" />
                                    </a>
                                    <a className="hover:scale-110 transition-all duration-500 delay-200 cursor-pointer">
                                        <FaLinkedin size={24} color="#0077B5" />
                                    </a>
                                    <a className="hover:scale-110 transition-all duration-500 delay-200 cursor-pointer">
                                        <FaGithub size={24} color={dark ? '#424769' : '#7077A1'} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Team;