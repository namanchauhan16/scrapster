import { useContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { DarkModeContext } from "../../Context/darkmode";
import NavigationBar from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import Ticketform from "../../Components/Ticketform";
import { RiArrowRightWideLine, RiDeleteBin5Line, RiDeleteBin5Fill } from "react-icons/ri";
import { BsFillPersonFill, BsFillTicketPerforatedFill } from "react-icons/bs";
import Axios from "axios";

interface DecodedToken {
    uid: string;
    name: string;
    email: string;
    phone: string;
    exp: number;
    iat: number;
    role: string; // Add the 'role' property
}

const UserDashboard = () => {

    const { dark } = useContext(DarkModeContext) || {};
    const [user, setUser] = useState<DecodedToken | null>(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [tickets, setTickets] = useState<any[]>([]);

    const OpenModal = () => {
        setIsOpenModal(true);
    };

    const CloseModal = () => {
        setIsOpenModal(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (token) {
            try {
                const decodedUser = jwtDecode<DecodedToken>(token); 
                localStorage.setItem('uid', decodedUser.uid);
                setUser(decodedUser);
            } catch (error) {
                console.error('Invalid token');
            }
        }
    }, []);

    const handleDelete = async () => {
        try {
            const email = user?.email;
            const res = await Axios.delete("http://localhost:3000/user/delete", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                data: {
                    email: email
                }
            });
            console.log(res.data);
            localStorage.removeItem('token');
            window.location.href = '/';
        } catch (error: any) {
            console.error('Error deleting user:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('uid');
                if (userId && localStorage.getItem('token')) {
                    const res = await Axios.get("http://localhost:3000/ticket/getUserTicket", {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        params: { userId: userId }
                    });
                    console.log(res.data);
                    setTickets(res.data);
                }
            } catch (error: any) {
                console.error('Error getting user tickets:', error.response ? error.response.data : error.message);
            }
        };
        fetchData();
    }, []);

    const handleMyTickets = async () => {
        try {
            const userId = localStorage.getItem('uid');
            if (userId && localStorage.getItem('token')) {
                const res = await Axios.get("http://localhost:3000/ticket/getUserTicket", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    params: { userId: userId }
                });
                console.log(res.data);
                setTickets(res.data);
            }
        } catch (error: any) {
            console.error('Error getting user tickets:', error.response ? error.response.data : error.message);
        }
    };

    const handleDeleteTicket = async (ticketId: string) => {
        try {
            const userId = localStorage.getItem('uid');
            const token = localStorage.getItem('token');

            if (userId && token && ticketId) {
                const res = await Axios.delete(`http://localhost:3000/ticket/deleteTicket/${ticketId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }, params: { ticketId: ticketId }
                });

                console.log(res.data);
                // Update the tickets state to remove the deleted ticket
                setTickets(tickets.filter(ticket => ticket.ticketId !== ticketId));
            } else {
                console.error('User ID, token, or ticket ID is missing.');
            }
        } catch (error: any) {
            console.error('Error deleting ticket:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={dark ? "bg-[#1A1B1D]" : "bg-[#e2e3e5]"}>
            <header className="absolute top-0 left-0 w-full p-4 z-10">
                <NavigationBar />
            </header>
            <div className="relative">
                <img
                    src="/dashboard.jpg"
                    alt="placeholder"
                    className={`w-full h-[7rem] object-cover object-top blur-[3px] ${dark ? 'brightness-[0.3]' : 'brightness-50'}`}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center mt-4 mb-6 mx-4 md:mx-16">
                <div className="flex flex-col gap-4 w-full md:w-[22rem]">
                    <div className={`flex gap-3 rounded-md ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'} p-4 items-center`}>
                        <img src="/man.webp" alt="profile" className="rounded-full w-12 h-12 md:w-16 md:h-16" />
                        <div className="flex flex-col">
                            <h3 className={`text-[0.8rem] md:text-[0.9rem] font-normal ${dark ? 'text-white' : 'text-gray-800'}`}>Hello,</h3>
                            <h1 className={`text-[1rem] md:text-[1.2rem] font-medium ${dark ? 'text-white' : 'text-gray-700'}`}>{user?.name}</h1>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-3 rounded-md ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'} p-4`}>
                        <h2 className={`flex gap-4 text-[1.1rem] md:text-[1.3rem] ${dark ? 'text-gray-400' : 'text-gray-600'} font-medium uppercase mt-2`}>
                            <BsFillPersonFill size={30} color="#CEDF9F" />
                            My Account
                        </h2>
                        <hr className="border-[#3c3d3f]" />
                        <h2 className={`text-[0.9rem] md:text-[1rem] ${dark ? 'text-white' : 'text-black'} ml-8 md:ml-12`}>{user?.name}</h2>
                        <h2 className={`text-[0.9rem] md:text-[1rem] ${dark ? 'text-white' : 'text-black'} ml-8 md:ml-12`}>{user?.email}</h2>
                        <h2 className={`text-[0.9rem] md:text-[1rem] ${dark ? 'text-white' : 'text-black'} ml-8 md:ml-12`}>{user?.phone}</h2>
                    </div>
                    <div className={`flex flex-col gap-3 rounded-md ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'} p-4`}>
                        <button onClick={handleMyTickets} className={`flex gap-3 justify-between ${dark ? 'text-white' : 'text-gray-700'} items-center`}>
                            <div className="flex gap-3 text-[1rem] md:text-[1.18rem] items-center">
                                <BsFillTicketPerforatedFill size={20} color="#CEDF9F" />
                                My Tickets
                            </div>
                            <RiArrowRightWideLine />
                        </button>
                        <hr className="border-[#3c3d3f]" />
                        <div className={`flex gap-3 justify-between ${dark ? 'text-gray-400' : 'text-gray-600'} items-center mb-2`}>
                            <h2 className="flex gap-4 text-[1.1rem] md:text-[1.3rem] font-medium uppercase mt-2">
                                <BsFillPersonFill size={30} color="#CEDF9F" />
                                Account Settings
                            </h2>
                        </div>
                        <a href="#" className={`text-[0.9rem] md:text-[1.12rem] ${dark ? 'text-white' : 'text-black'} ml-8 md:ml-12`}>
                            Profile Information
                        </a>
                        <a href="#" className={`text-[0.9rem] md:text-[1.12rem] ${dark ? 'text-white' : 'text-black'} ml-8 md:ml-12`}>
                            Manage Address
                        </a>
                        <a href="#" className={`text-[0.9rem] md:text-[1.12rem] ${dark ? 'text-white' : 'text-black'} ml-8 md:ml-12`}>
                            Change Password
                        </a>
                        <hr className="border-[#3c3d3f]" />
                        <button onClick={handleDelete} className={`flex gap-3 justify-between ${dark ? 'text-white' : 'text-gray-700'} items-center`}>
                            <div className="flex gap-3 text-[1rem] md:text-[1.18rem] items-center">
                                <RiDeleteBin5Line size={24} color="#CEDF9F" />
                                Delete Account
                            </div>
                            <RiArrowRightWideLine />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-md w-full">
                        {tickets.map((ticket, index) => (
                            <div key={index} className={`flex flex-col ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'} p-4 rounded-md`}>
                                <div className="flex justify-between items-center">
                                    <h2 className={`text-[1rem] md:text-[1.2rem] ${dark ? 'text-white' : 'text-black'} font-normal`}>
                                        <span className="text-[0.9rem] md:text-[1rem] text-[#55679C] font-medium">Ticket #</span>
                                        {ticket.ticketId}
                                    </h2>
                                    <div className="flex gap-3 items-center">
                                        <button onClick={() => handleDeleteTicket(ticket.ticketId)} className="text-gray-200 text-base font-normal p-2 rounded-full cursor-pointer bg-[#A91D3A] transition-all duration-500 hover:bg-white hover:text-gray-900">
                                            <RiDeleteBin5Fill size={20} />
                                        </button>
                                    </div>
                                </div>
                                <hr className="border-[#3c3d3f] mt-2" />
                                <h3 className={`text-[0.9rem] md:text-[1.1rem] ${dark ? 'text-gray-400' : 'text-gray-700'} font-normal mt-2`}>
                                    <span className="text-[#677D6A] font-medium mr-2">Status : </span> {ticket.status}
                                </h3>
                                <h3 className={`text-[0.9rem] md:text-[1.1rem] ${dark ? 'text-gray-400' : 'text-gray-700'} font-normal mt-2`}>
                                    <span className="text-[#677D6A] font-medium mr-2">Items : </span> {ticket.items.join(' , ')}
                                </h3>
                                <h3 className={`text-[0.9rem] md:text-[1.1rem] ${dark ? 'text-gray-400' : 'text-gray-700'} font-normal mt-2`}>
                                    <span className="text-[#677D6A] font-medium mr-2">Pickup Location : </span> {ticket.location}
                                </h3>
                                <h3 className={`text-[0.9rem] md:text-[1.1rem] ${dark ? 'text-gray-400' : 'text-gray-700'} font-normal mt-2`}>
                                    <span className="text-[#677D6A] font-medium mr-2">Pickup Date : </span>
                                    {new Date(ticket.pickupDate).toISOString().split('T')[0]}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end mt-8 md:mt-[7.5rem] mr-5 gap-4">
                        <button className="text-gray-200 text-base font-normal py-2 px-5 sm:px-7 rounded-full cursor-pointer bg-[#4d4656] transition-all duration-500 hover:bg-white hover:text-gray-900">
                            View All Tickets
                        </button>
                        <button onClick={OpenModal} className="text-gray-700 text-base font-normal py-2 px-5 sm:px-7 rounded-full cursor-pointer bg-orange-300 transition-all duration-500 hover:bg-white hover:text-gray-900">
                            Schedule Pickup
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            {isOpenModal && (
                <Modal isVisible={isOpenModal}>
                    <Ticketform closeModal={CloseModal} />
                </Modal>
            )}
        </div>

    );
};

export default UserDashboard;