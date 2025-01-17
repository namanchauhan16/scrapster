import { useContext } from "react";
import { DarkModeContext } from "../Context/darkmode";

const ContactForm = () => {
    const { dark } = useContext(DarkModeContext) || {};

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full md:max-w-8xl mx-4 md:ml-[15rem] my-10 flex flex-col md:flex-row">
                <div className={`w-full md:w-[45%] px-8 mb-4 md:mb-0 md:px-20 py-10 rounded-l-lg ${dark ? "bg-[#141415f5]" : "bg-slate-300"} shadow-lg`}>
                    <h2 className={`text-5xl font-medium ${dark ? 'text-gray-300' : 'text-gray-600'} mb-6 captalize`}>
                        Get In Touch
                    </h2>
                    <p className={`${dark ? 'text-gray-400' : 'text-gray-600'} mb-10`}>
                        Contact us for assistance or to get more information about e-waste recycling, disposal and management...
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C73659] text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className={`mb-2 text-xl font-medium leading-6 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Our Address
                                </h3>
                                <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>1230 Maecenas Street Donec Road</p>
                                <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>New York, EEUU</p>
                            </div>
                        </li>
                        <li className="flex mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C73659] text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className={`mb-2 text-xl font-medium leading-6 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Contact
                                </h3>
                                <a href="tel:+1 (123) 456-7890"><p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}> +1 (123) 456-7890</p></a>
                                <a href="tel:+1 (123) 456-7890"><p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}> +1 (123) 456-7890</p></a>
                            </div>
                        </li>
                        <li className="flex mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C73659] text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className={`mb-2 text-xl font-medium leading-6 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Email
                                </h3>
                                <a href="mailto:abc@gmail.com"><p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    abc@gmail.com
                                </p></a>
                                <a href="mailto:abc@gmail.com"><p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    abc@gmail.com
                                </p></a>
                            </div>
                        </li>
                        <li className="flex mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C73659] text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className={`mb-2 text-xl font-medium leading-6 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Working
                                    hours</h3>
                                <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Monday - Friday:<span className={`${dark ? 'text-yellow-400' : 'text-yellow-700'}`}> 08:00 - 17:00</span></p>
                                <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>Saturday &amp; Sunday: <span className={`${dark ? 'text-yellow-400' : 'text-yellow-700'}`}>08:00 - 12:00</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`w-full md:w-[40%] p-8 ${dark ? 'bg-[#282a2eb3] text-white' : 'bg-slate-100 text-gray-700'}  rounded-r-lg`}>
                    <h2 className={`text-3xl ${dark ? 'text-slate-200' : 'text-slate-600'} font-medium capitalize mb-1`}>Send us a message</h2>
                    <p className="text-[1.12rem] font-normal text-gray-400 mb-6">
                        Send us your message and we will get back to you as soon as possible...
                    </p>
                    <form>
                        <div>
                            <div className="capitalize text-xl mb-2">
                                <label>name</label>
                            </div>
                            <div className="border-2 relative">
                                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                        />
                                    </svg>
                                </span>
                                <input
                                    className={`w-full placeholder:capitalize px-8 py-1.5 text-gray-800 ${dark ? 'outline-none' : 'outline-teal-800'}`}
                                    type="text"
                                    placeholder="enter name"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between mt-4 gap-3 md:gap-8">
                            <div className="w-full">
                                <div className="capitalize text-xl mb-2">
                                    <label>email</label>
                                </div>
                                <div className="border-2 relative">
                                    <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-mail"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </span>
                                    <input
                                        className={`w-full placeholder:capitalize px-8 py-1.5 text-gray-800 ${dark ? 'outline-none' : 'outline-teal-800'}`}
                                        type="email"
                                        placeholder="enter email"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="capitalize text-xl mb-2">
                                    <label>phone</label>
                                </div>
                                <div className="border-2 relative">
                                    <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-phone"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </span>
                                    <input
                                        className={`w-full placeholder:capitalize px-8 py-1.5 text-gray-800 ${dark ? 'outline-none' : 'outline-teal-800'}`}
                                        type="tel"
                                        placeholder="enter phone"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="capitalize text-xl mb-2">
                                <label>Subject</label>
                            </div>
                            <div className="border-2 relative">
                                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-list-tree"
                                    >
                                        <path d="M21 12h-8" />
                                        <path d="M21 6H8" />
                                        <path d="M21 18h-8" />
                                        <path d="M3 6v4c0 1.1.9 2 2 2h3" />
                                        <path d="M3 10v6c0 1.1.9 2 2 2h3" />
                                    </svg>
                                </span>
                                <input
                                    className={`w-full placeholder:capitalize px-8 py-1.5 text-gray-800 ${dark ? 'outline-none' : 'outline-teal-800'}`}
                                    type="text"
                                    placeholder="enter subject"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="capitalize text-xl mb-2">
                                <label>Message</label>
                            </div>
                            <div className="border-1 relative">
                                <textarea
                                    className={`w-full placeholder:capitalize px-4 py-4 text-gray-800 ${dark ? 'outline-none' : 'outline-teal-800'} resize-none h-32`}
                                    placeholder="enter your message . . . . "
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="bg-teal-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
