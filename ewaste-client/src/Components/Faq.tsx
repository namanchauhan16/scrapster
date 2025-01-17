import { useContext, useState } from 'react';
import { DarkModeContext } from '../Context/darkmode';
import { RiAddCircleLine } from "react-icons/ri";
import { GrSubtractCircle } from "react-icons/gr";
import Questionbank from '../DataCenter/Questionbank.json';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const { dark } = useContext(DarkModeContext) || {};
    return (
        <div className="max-w-full h-auto mx-4 md:mx-52 mt-20 mb-10 p-6 flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] mt-10 md:mr-8">
                <img src="/faq.png" alt="Illustration" className="w-16 h-16 mx-auto md:mx-0" />
                <h2 className={`text-[2rem] font-light mb-4 text-center md:text-left ${dark ? 'text-gray-200':'text-gray-800'}`}>
                    Frequently Asked
                    <br />
                    <strong className="text-[3rem] text-[#A0153E] font-normal" style={{ lineHeight: '1.2rem' }}>
                        Questions
                    </strong>
                </h2>
                <p className={`w-full mb-8 text-center md:text-left ${dark ? 'text-white':'text-gray-800'} text-light`}>
                    <span className={` text-[1.3rem] text-normal ${dark ? 'text-[#EEF5FF]':'text-gray-700'}`}>Have questions?</span>
                    <br /> We have answers! Check out our Frequently Asked Questions to know more about Blogedium.
                </p>
            </div>
            <div className="w-full md:w-[70%] mt-4 md:mt-0">
                {Questionbank.Faq.map((faq, index) => (
                    <div key={index} className="overflow-hidden my-4 rounded-tl-[1.12rem] rounded-br-[1.12rem]">
                        <button
                            className={`flex items-center justify-between w-full px-5 py-3 text-left ${openIndex === index ? (dark ? 'bg-[#1e2021a1] focus:bg-[#1e2021a1]':'bg-[#8a8f99bf] focus:bg-[#8a8f99bf]') : (dark ? 'bg-[#0F0F0F] hover:bg-[#191717]':'bg-gray-100 hover:bg-orange-300')} focus:outline-none`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className={`font-normal text-[1.12rem] ${openIndex === index ? (dark ? 'text-gray-300' : 'text-gray-800') : (dark ? 'text-gray-300':'text-gray-800')}`}>
                                {index + 1}. {faq.ques}
                            </span>
                            {openIndex === index ? (
                                <GrSubtractCircle size={20} className={`inline-block float-right ${dark ? 'text-gray-100':'text-gray-800'}`} />
                            ) : (
                                <RiAddCircleLine size={20} className={`inline-block float-right ${dark ? 'text-gray-100':'text-gray-800'}`} />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className={`px-4 py-2 ${dark ? 'bg-[#292a2cab]':'bg-gray-300'}`}>
                                <p className={`text-[1.05rem] font-normal text-justify ${dark ? 'text-gray-300':'text-gray-800'}`}>{faq.ans}</p>
                            </div>
                        )}
                    </div>
                )).slice(0, 5)}
            </div>
        </div>
    );
};

export default Faq;
