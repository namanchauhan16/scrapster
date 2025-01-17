import { useContext } from "react";
import { DarkModeContext } from "../Context/darkmode";
import { TbArrowForward } from "react-icons/tb";
import Questionbank from "../DataCenter/Questionbank.json";

const Subscription = () => {

    const { dark } = useContext(DarkModeContext) || {};

    return (
        <div className={`pt-12 ${dark ? 'bg-[#141111EB]' : 'bg-gray-100'}`}>
            <div className="lg:text-center">
                <h2
                    className="font-heading text-center mb-4 bg-orange-100 text-orange-800 px-4 py-1 rounded-lg mx-[5rem] md:mx-0 w-[50%] md:w-48 md:mx-auto text-sm font-semibold tracking-widest text-black uppercase title-font">
                    Pricing
                </h2>
                <p className={`font-heading mt-3 text-[2.5rem] text-center leading-8 font-medium tracking-tight ${dark ? 'text-gray-300' : 'text-gray-900'} sm:text-4xl`}>
                    Simple, transparent pricing.
                </p>
                <p className="text-center text-gray-500">
                    Choose a plan that works for you and your team. All plans include a 14-day free trial.
                </p>
            </div>
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 py-16 mx-auto gap-16">
                {
                    Questionbank.SubscriptionPlan.map((item, i) => (
                        <div key={i} className="flex flex-wrap -m-4">
                            <div className="p-4 w-full">
                                <div className={`w-[22rem] h-[30rem] px-6 pt-10 pb-6 rounded-tl-[1.5rem] rounded-br-[1.5rem] flex flex-col relative overflow-hidden ${dark ? 'bg-gradient-to-r from-[#0F2027] to-[#203A43]' : 'bg-gradient-to-r from-[#DBDBDB] to-[#bdc3c7]'}`}>
                                    <h2 className="text-[0.93rem] tracking-widest title-font mb-1 font-medium text-[#BE7B72]">
                                        {item.plan}
                                    </h2>
                                    <h1 className={`text-5xl leading-none flex items-center pb-4 mb-4 ${dark ? 'text-gray-300' : 'text-gray-900'}`}>
                                        <span>₹{item.price}</span>
                                        <span className="text-lg ml-1 font-normal">/month</span>
                                    </h1>
                                    <hr className="border-[0.02rem] border-gray-500" />
                                    <div className="mt-8">
                                        {
                                            item.features.map((feature, index) => (
                                                <p key={index} className="flex items-center mb-2">
                                                    <span className={`mr-2 inline-flex items-center justify-center text-white flex-shrink-0`}>
                                                        <TbArrowForward size={20} className="text-green-500" />
                                                    </span>
                                                    <span className={`${dark ? 'text-gray-300':'text-gray-700'}`}>
                                                    {feature}
                                                    </span>
                                                </p>
                                            ))
                                        }
                                    </div>
                                    <button
                                        className={`absolute bottom-6 text-white mx-16 bg-[#385f4f] border-0 py-2 px-10 rounded-full focus:outline-none hover:bg-white hover:text-gray-900`}>
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Subscription;