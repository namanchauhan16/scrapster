import { useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import NavigationBar from '../../Components/Navigation';
import { DarkModeContext } from '../../Context/darkmode';
import Footer from '../../Components/Footer';
import Axios from 'axios';
import Modal from '../../Components/Modal';
import { BsFillPersonFill, BsFillTicketPerforatedFill } from 'react-icons/bs';
import { RiArrowRightWideLine, RiDeleteBin5Line } from 'react-icons/ri';
import { IoNotifications } from "react-icons/io5";


interface Ticket {
    id: string;
    raisedBy: string;
    items: string[];
    status: string;
}

interface DecodedToken {
    uid: string;
    name: string;
    email: string;
    phone: string;
    exp: number;
    iat: number;
    role: string; // Add the 'role' property
}

const RecyclerDashboard = () => {

    const { dark } = useContext(DarkModeContext) || {};
    const [user, setUser] = useState<DecodedToken | null>(null);
    const [notifications, setNotifications] = useState<Ticket[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

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

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    const response = await Axios.get('https://scrapster-api.vercel.app/ticket/notification', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setNotifications(response.data);
                }
            } catch (error: any) {
                console.error('Error fetching notifications:', error.response ? error.response.data : error.message);
            }
        };

        fetchNotifications();
    }, []);

    const handleNotificationClick = (ticket: Ticket) => {
        setSelectedTicket(ticket); // Show ticket details
    };

    const handleCloseModal = () => {
        setSelectedTicket(null); // Close ticket detail modal
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

            <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6 mx-4 md:mx-16">
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
                        <button className={`flex gap-3 justify-between ${dark ? 'text-white' : 'text-gray-700'} items-center`}>
                            <div className="flex gap-3 text-[1rem] md:text-[1.18rem] items-center">
                                <RiDeleteBin5Line size={24} color="#CEDF9F" />
                                Delete Account
                            </div>
                            <RiArrowRightWideLine />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-6 mx-4 md:mx-2">
                    <div className='flex flex-col gap-4 w-[55rem]'>
                        <div className={`flex gap-3 rounded-md text-[1.1rem] md:text-[1.15rem] ${dark ? 'bg-[#0f1010db] text-gray-400' : 'bg-[#EEEEEE] text-gray-600'} font-medium uppercase p-4 items-center`}>
                            <BsFillTicketPerforatedFill size={30} color={dark ? "#CEDF9F" : "#5F374B"} />
                            Tickets
                        </div>

                        <div className={`flex gap-4 rounded-md ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'} p-4`}>
                            <div className="flex flex-col gap-4 rounded-lg shadow-lg p-4 w-[17rem]">
                                No. of Tickets:
                                <h1 className="text-[1.5rem] font-bold">
                                    {notifications.length}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4 rounded-lg shadow-lg p-4 w-[17rem]">
                                No. of Pending Tickets:
                                <h1 className="text-[1.5rem] font-bold">
                                    {notifications.filter(ticket => ticket.status === 'pending').length}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4 rounded-lg shadow-lg p-4 w-[17rem]">
                                No. of Completed Tickets:
                                <h1 className="text-[1.5rem] font-bold">
                                    {notifications.filter(ticket => ticket.status === 'completed').length}
                                </h1>
                            </div>
                        </div>

                        <div className={`flex gap-4 rounded-md ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'} p-4`}>
                            <div className="flex flex-col gap-4 rounded-lg shadow-lg p-4 w-full">
                                Items Recycled:
                                <h1 className="text-[1.5rem] font-normal">
                                    <ul className="list-disc list-inside">
                                        <li className="text-[1rem]">Refrigerator</li>
                                        <li className="text-[1rem]">Air Conditioner</li>
                                        <li className="text-[1rem]">Microwave</li>
                                    </ul>
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4 rounded-lg shadow-lg p-4 w-full">
                                Price Per Kg:
                                <h1 className="text-[1.5rem] font-normal">
                                    <ul className="list-disc list-inside">
                                        <li className="text-[1rem]">Refrigerator: $10</li>
                                        <li className="text-[1rem]">Air Conditioner: $15</li>
                                        <li className="text-[1rem]">Microwave: $5</li>
                                    </ul>
                                </h1>
                                <div className="flex gap-4 mt-4">
                                    Total Price: $100
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-[22rem]">
                    <div className={`flex gap-3 rounded-md text-[1.1rem] md:text-[1.15rem] ${dark ? 'bg-[#0f1010db] text-gray-400' : 'bg-[#EEEEEE] text-gray-600'} font-medium uppercase p-4 items-center`}>
                        <IoNotifications size={30} color={dark ? "#CEDF9F" : "#5F374B"} />
                        Notifications
                    </div>
                    <div className={`flex flex-col gap-3 rounded-md ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'} h-full`}>
                        <ul>
                            {notifications.map((ticket, index) => (
                                <div key={index} className={`flex flex-col m-3 ${dark ? 'bg-[#0f1010db]' : 'bg-[#EEEEEE]'}`}>
                                    <li onClick={() => handleNotificationClick(ticket)} className={
                                        `flex flex-col ${dark ? 'bg-[#0f1010db]' : 'bg-[#D6DAC8]'} rounded-md cursor-pointer p-2`
                                    }>
                                        <h3 className={`text-[1rem] ${dark ? 'text-white' : 'text-black'}`}>Ticket ID: {ticket.id}</h3>
                                        <p className={`text-[0.9rem] ${dark ? 'text-white' : 'text-black'}`}>Raised By: {ticket.raisedBy}</p>
                                        <p className={`text-[0.9rem] ${dark ? 'text-white' : 'text-black'}`}>Status: {ticket.status}</p>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {selectedTicket && (
                <Modal isVisible={true}>
                    <div className="flex flex-col gap-4 rounded-md bg-white p-4">
                        <h2 className="text-xl font-medium">Ticket Details</h2>
                        <hr className="border-[#3c3d3f]" />
                        <h3 className="text-lg font-medium">Ticket ID: {selectedTicket.id}</h3>
                        <h3 className="text-lg font-medium">Raised By: {selectedTicket.raisedBy}</h3>
                        <h3 className="text-lg font-medium">Status: {selectedTicket.status}</h3>
                        <h3 className="text-lg font-medium">Items:</h3>
                        <ul>
                            {selectedTicket.items.map((item, index) => (
                                <li key={index} className="text-lg font-medium">{item}</li>
                            ))}
                        </ul>
                        <hr className="border-[#3c3d3f]" />
                        <div className="flex gap-4 w-full">
                            <button className="bg-green-500 text-white p-2 rounded-md w-full">Accept</button>
                            <button onClick={handleCloseModal} className="bg-red-500 text-white p-2 rounded-md w-full">Reject</button>
                        </div>
                    </div>
                </Modal>
            )}

            <Footer />
        </div>
    )
}

export default RecyclerDashboard;