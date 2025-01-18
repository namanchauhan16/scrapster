import { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../Context/darkmode";
import Axios from "axios";

const Login = () => {

  const { dark } = useContext(DarkModeContext) || {};
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await Axios.post("https://scrapster-api.vercel.app/user/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", JSON.stringify(res.data));

      const token = localStorage.getItem("token");
      const decoded: any = jwtDecode(token as string);
      if (decoded.role === "user") {
        window.location.href = "/userDashboard";
      } else if (decoded.role === "recycler") {
        window.location.href = "/recyclerDashboard";
      } else if (decoded.role === "admin") {
        window.location.href = "/";
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  
  return (
    <>
      <div className={`min-h-screen ${dark ? 'bg-[#1A1B1D]' : 'bg-gray-100'} text-gray-900 flex justify-center`}>
        <div className="max-w-screen-xl h-fit m-0 sm:m-10 lg:my-28 bg-white shadow sm:rounded-lg flex justify-center">
          <div className={`bg-gray-200 w-fit flex items-center justify-center ${dark ? 'bg-gray-700' : 'bg-slate-800'}`}>
            <div className="bg-white p-6 shadow-lg w-96 dark:bg-slate-100">
              <form onSubmit={handleSubmit}>
                <div className="text-2xl text-blue-800 font-bold capitalize text-center mb-4">
                  <h3>welcome back!</h3>
                  <p className="text-[1.12rem] font-normal text-gray-400">Login to your account</p>
                </div>
                <div>
                  <div>
                    <div className="capitalize text-xl mb-2">
                      <label>username</label>
                    </div>
                    <div className="border-2 relative">
                      <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </span>
                      <input 
                      type="email"
                        name="email" 
                        value={user.email} 
                        onChange={handleChange}
                      className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"  placeholder="enter username or email" 
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="capitalize text-xl mb-2">
                      <label>password</label>
                    </div>
                    <div className="border-2 relative">
                      <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                      </span>
                      <input 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange}
                      className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800" type="password" placeholder="enter password" 
                      />
                    </div>
                  </div>
                  <div className="sm:flex sm:justify-between inline-block my-4">
                    <div className="flex">
                      <input className="text-blue-800" type="checkbox" />
                      <span className="pl-1">Remember me</span>
                    </div>
                    <div className="text-blue-800 hover:underline">
                      <a href="#">Forgot password?</a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                     className="bg-blue-800 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100"
                     >login</button>
                  </div>
                  <div className="text-[18px] text-center mt-4">
                    <p>Don't have an account? <Link className="capitalize text-blue-800 hover:underline cursor-pointer" to="/register">register</Link></p>
                  </div>
                </div>
              </form>
              <div className="flex items-center space-x-2 mt-4">
                <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                <span className="text-zinc-400 dark:text-zinc-700 text-sm">OR</span>
                <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
              </div>
              <div className="mt-3 space-y-3">
                <button
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  type="button"
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
          <div className="relative bg-indigo-100 text-center hidden lg:flex">
            <div className="relative w-fit h-fit bg-contain bg-center bg-no-repeat">
              <img src="/login.webp" alt="login" className="w-[28rem] h-fit" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-8 py-[10rem] bg-opacity-70 bg-black h-full">
              <h2 className="text-slate-200 text-[3.5rem] font-medium text-start ml-10">Scrapster</h2>
              <p className="text-gray-300 text-[1rem] text-justify mx-10 mt-8">
                Your one-stop solution for all your scrap needs and recycling solutions in one place.
                Scrapster is a platform that connects consumers and recyclers to help them recycle their waste and earn money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
