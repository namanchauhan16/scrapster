import { useContext, useState } from 'react';
import { DarkModeContext } from '../Context/darkmode';
import { Link } from 'react-router-dom';
import Alert from '../Components/Alert';
import Axios from 'axios';

const Registerpage = () => {
    const { dark } = useContext(DarkModeContext) || {};
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: ''
    });
    const [errors, setErrors] = useState<any>({});
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'info' | 'warning'; message: string } | null>(null);

    const handleChange = (e: any) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: any = {};

        if (!user.name) newErrors.name = 'Name is required';
        if (!user.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!user.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(user.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!user.password) newErrors.password = 'Password is required';
        if (!user.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (user.password !== user.confirmPassword) {
            newErrors.comparePassword = 'Passwords do not match';
        }
        if (!user.role) newErrors.role = 'Role is required';

        return newErrors;
    };

    const handleRegister = async (e: any) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await Axios.post('https://scrapster-api.vercel.app/user/register', {
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                role: user.role
            });
            setAlert({ type: 'success', message: 'Registration successful!' });
            setTimeout(() => {
            window.location.href = '/login';
            }, 3000);
        } catch (err: any) {
            console.log(err.response.data);
            setAlert({ type: 'error', message: err.response.data.message });
        }
    };

    const handleCloseAlert = () => {
        setAlert(null);
    };

    return (
        <>  
            <div className={`min-h-screen ${dark ? 'bg-[#1A1B1D]' : 'bg-gray-100'} text-gray-900 flex justify-center`}>
                <div className="absolute top-0 left-[2.2rem] md:left-[38rem] z-10 ">
                {alert && (
                <Alert 
                    type={alert.type} 
                    message={alert.message} 
                    onClose={handleCloseAlert} 
                />
            )}
                </div>
            
                <div className="max-w-[80rem] m-0 m-10 bg-white shadow sm:rounded-lg flex justify-center">
                    <div className="relative bg-gray-800 text-center hidden lg:flex">
                        <div className="relative w-fit h-fit bg-contain bg-center bg-no-repeat">
                            <img src="/register.webp" alt="register" className='w-[32rem] h-[48rem] text-center' />
                        </div>
                        <div className="absolute left-0 right-0 px-8 py-[10rem] bg-opacity-70 bg-black h-full">
                            <h2 className="text-slate-200 text-[5rem] font-medium text-start ml-10">Scrapster</h2>
                            <p className="text-gray-300 text-[1.12rem] text-justify mx-10 mt-8">
                                Your one-stop solution for all your scrap needs and recycling solutions in one place.
                                Scrapster is a platform that connects consumers and recyclers to help them recycle their waste and earn money.
                            </p>
                        </div>
                    </div>
                    <div className={`md:w-[55%] bg-gray-200 flex justify-center ${dark ? 'bg-gray-700' : 'bg-slate-800'}`}>
                        <div className="bg-white p-6 shadow-lg w-full dark:bg-slate-100">
                            <form onSubmit={handleRegister}>
                                <div className="text-2xl text-teal-800 font-semibold capitalize text-center mb-4">
                                    <h3>Welcome to Scrapster!</h3>
                                    <p className="text-[1.12rem] font-normal text-gray-400">
                                        Register to your account
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <div className="capitalize text-xl mb-1">
                                            <label className='text-[1.12rem]'>Role</label>
                                        </div>
                                        <div className="border-2 relative">
                                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-cog"><path d="M2 21a8 8 0 0 1 10.434-7.62" /><circle cx="10" cy="8" r="5" /><circle cx="18" cy="18" r="3" /><path d="m19.5 14.3-.4.9" /><path d="m16.9 20.8-.4.9" /><path d="m21.7 19.5-.9-.4" /><path d="m15.2 16.9-.9-.4" /><path d="m21.7 16.5-.9.4" /><path d="m15.2 19.1-.9.4" /><path d="m19.5 21.7-.4-.9" /><path d="m16.9 15.2-.4-.9" /></svg>
                                            </span>
                                            <select
                                                name="role"
                                                value={user.role}
                                                onChange={handleChange}
                                                className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                                            >
                                                <option value="" disabled>
                                                    Role
                                                </option>
                                                <option value="user">Consumer</option>
                                                <option value="recycler">Recycler</option>
                                            </select>
                                        </div>
                                        {errors.role && <p className="text-red-500 text-[0.75rem]">{errors.role}</p>}
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-3 w-full justify-between items-center mt-4'>
                                        <div>
                                            <div className="capitalize mb-1">
                                                <label className='text-[1.12rem]'>name</label>
                                            </div>
                                            <div className="border-2 relative">
                                                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    name="name"
                                                    className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800" type="text" placeholder="enter name"
                                                    value={user.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.name && <p className="text-red-500 text-[0.75rem]">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <div className="capitalize text-xl mb-1">
                                                <label className='text-[1.12rem]'>Email</label>
                                            </div>
                                            <div className="border-2 relative">
                                                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                </span>
                                                <input
                                                    name="email"
                                                    className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800" type="text" placeholder="enter email"
                                                    value={user.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.email && <p className="text-red-500 text-[0.75rem]">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="capitalize text-xl mb-1">
                                            <label className='text-[1.12rem]'>phone number</label>
                                        </div>
                                        <div className="border-2 relative">
                                            <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            </span>
                                            <hr className="absolute inset-y-0 left-[2rem] border-gray-400" />
                                            <div className="text-gray-400 absolute inset-y-0 left-[2rem] flex items-center px-2 gap-2">
                                                <img src="/india.png" alt="india" className="w-5 h-5" />
                                                +91
                                            </div>
                                            <hr className="absolute inset-y-0 left-[8rem] border-gray-400" />
                                            <input
                                                name="phone"
                                                className="w-full placeholder:capitalize pl-28 pr-4 py-1.5 outline-blue-800" type="text" placeholder="enter phone number"
                                                value={user.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-[0.75rem]">{errors.phone}</p>}
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-3 w-full justify-between'>
                                        <div className="mt-4">
                                            <div className="capitalize text-xl mb-1">
                                                <label className='text-[1.12rem]'>password</label>
                                            </div>
                                            <div className="border-2 relative">
                                                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    name="password"
                                                    className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800" type="password" placeholder="enter password"
                                                    value={user.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.password && <p className="text-red-500 text-[0.75rem]">{errors.password}</p>}
                                        </div>
                                        <div className="mt-4">
                                            <div className="capitalize text-xl mb-1">
                                                <label className='text-[1.12rem]'>confirm password</label>
                                            </div>
                                            <div className="border-2 relative">
                                                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                    </svg>
                                                </span>
                                                <input
                                                    name="confirmPassword"
                                                    className="w-full placeholder:capitalize pl-8 pr-4 py-1.5 outline-blue-800" type="password" placeholder="confirm password"
                                                    value={user.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {errors.confirmPassword && <p className="text-red-500 text-[0.75rem]">{errors.confirmPassword}</p>}
                                        </div>
                                    </div>
                                    {errors.comparePassword && <p className="text-red-500 text-[0.75rem]">{errors.comparePassword}</p>}
                                    <div className="sm:flex sm:justify-between flex-col inline-block my-4">
                                        <div className="flex">
                                            <input className="text-blue-800" type="checkbox" checked />
                                            <span className="pl-1">
                                                I agree to the
                                                <Link to="#" className="text-blue-800 hover:underline"> Terms & Conditions</Link>
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <input className="text-blue-800" type="checkbox" checked />
                                            <span className="pl-1">
                                                I agree to the
                                                <Link to="#" className="text-blue-800 hover:underline"> Privacy Policy</Link>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="bg-teal-800 text-xl text-white font-normal uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">Sign In</button>
                                    </div>
                                    <div className="text-[18px] text-center mt-4">
                                        <p>Already have an account? <Link className="capitalize text-blue-800 hover:underline cursor-pointer" to="/login">login</Link></p>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center space-x-2 mt-4">
                                <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                                <span className="text-zinc-400 dark:text-zinc-700 text-sm">OR</span>
                                <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-3">
                                <button
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                    type="submit"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-rose-500"
                                        >
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </button>
                                <button
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                    type="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-500">
                                        <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.02 3.66 9.17 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.84c0-2.5 1.47-3.88 3.72-3.88 1.08 0 2.2.19 2.2.19v2.43h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85h2.72l-.43 2.89h-2.29V21.9C18.34 21.17 22 17.02 22 12z" />
                                    </svg>
                                    <span className="ml-2 font-semibold text-[1rem]">Sign in with Facebook</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registerpage;