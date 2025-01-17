import { useContext } from "react";
import { DarkModeContext } from "../Context/darkmode";
import NavigationBar from "../Components/Navigation";
import Subscription from "../Components/Subscription";
import Footer from "../Components/Footer";

const Subscriptionpage = () => {
    const { dark } = useContext(DarkModeContext) || {};

    return (
        <div className={dark ? "bg-[#1A1B1D]" : "bg-white"}>
            <div className="relative">
                <img
                    src="/contact.jpg"
                    alt="placeholder"
                    className={`w-full h-[20rem] md:h-[25rem] object-cover object-top ${dark ? 'brightness-[0.2]' : 'brightness-100'}`}
                />
                <header className="absolute top-0 left-0 w-full p-4">
                    <NavigationBar />
                </header>
            </div>
            <Subscription />
            <Footer />
        </div>
    );
};

export default Subscriptionpage;