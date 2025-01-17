import { useState } from 'react';
import Select from 'react-select';
import Alert from '../Components/Alert';
import Axios from 'axios';

const options = [
    { value: 'Air Conditioner', label: 'Air Conditioner' },
    { value: 'Refrigerator', label: 'Refrigerator' },
    { value: 'Television', label: 'Television' },
    { value: 'Washing Machine', label: 'Washing Machine' },
    { value: 'Microwave', label: 'Microwave' },
    { value: 'Others', label: 'Others' }
];

const Ticketform = ({ closeModal }: { closeModal: () => void }) => {

    const [items, setItems] = useState({
        name: '',
        email: '',
        address: '',
        items: [] as { value: string }[],
        date: ''
    });
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info' | 'warning', message: string } | null>(null);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setItems({
            ...items,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await Axios.post('http://localhost:3000/ticket/create', {
                userId : localStorage.getItem('uid'),
                name: items.name,
                email: items.email,
                address: items.address,
                items: items.items.map(item => item.value),
                date: items.date
            });
            setAlert({ type: 'success', message: 'Registration successful!' })
        } catch (error :any) {
            setAlert({ type: 'error', message: error.response ? error.response.data : error.message });
        }
    };

    const handleCloseAlert = () => {
        setAlert(null);
    };


    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 p-4">
            <h1 className="text-4xl font-bold">
                Schedule Your Pickup
            </h1>
            <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className='flex flex-row items-center gap-4'>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-medium ml-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={items.name}
                            onChange={handleChange}
                            id="name"
                            className="border-2 border-gray-300 px-2 py-1 rounded-sm w-full"
                            placeholder='Name'
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-medium ml-2">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={items.email}
                        onChange={handleChange}
                        id="email" 
                        className="border-2 border-gray-300 px-2 py-1 rounded-sm w-full" 
                        placeholder='Email' 
                        />
                    </div>
                </div>
                <label htmlFor="address" className="text-lg font-semibold mt-4 ml-2">Pickup Location</label>
                <input 
                type="text" 
                name="address" 
                value={items.address}
                onChange={handleChange}
                id="address" 
                className="border-2 border-gray-300 px-2 py-1 rounded-sm w-full" 
                placeholder='pickup location'
                 />
                <label htmlFor="item" className="text-lg font-semibold mt-4">Item</label>
                <Select
                    isMulti
                    name="items"
                    options={options}
                    value={items.items}
                    onChange={(value) => setItems({ ...items, items: value as { value: string }[] })}
                    className="w-full"
                    classNamePrefix="select"
                    placeholder="Select Items"
                />
                <label className="text-lg font-semibold mt-4">Upload images</label>
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="border-2 border-gray-300 pr-2 py-[0.1rem] rounded-lg w-full bg-gray-100 file:border-none file:bg-gray-300 file:py-1 file:h-full file:rounded-l-sm file:mr-2 file:cursor-pointer"
                    multiple
                />
                <label htmlFor="date" className="text-lg font-semibold mt-4">Date</label>
                <input 
                type="date" 
                name="date" 
                value={items.date}
                onChange={handleChange}
                id="date" 
                className="border-2 border-gray-300 px-2 py-1 rounded-sm w-full" 
                />
                <div className="flex flex-row items-center gap-4 mt-4">
                    <button onClick={closeModal} className="text-gray-200 text-base font-normal py-2 px-7 w-full cursor-pointer bg-[#4d4656] transition-all duration-500 hover:bg-white hover:text-gray-900">
                        Cancel
                    </button>
                    <button type='submit' className="text-gray-700 text-base font-normal py-2 px-7 w-full cursor-pointer bg-orange-300 transition-all duration-500 hover:bg-white hover:text-gray-900">
                        Schedule Pickup
                    </button>
                </div>
            </form>
            {
                alert && (
                    <Alert 
                    type={alert.type} 
                    message={alert.message} 
                    onClose={handleCloseAlert} 
                />
                )
            }
        </div>
    );
};

export default Ticketform;