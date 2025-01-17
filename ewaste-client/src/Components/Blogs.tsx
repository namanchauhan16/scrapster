import { useContext, useState } from "react";
import { DarkModeContext } from "../Context/darkmode";
import Questionbank from "../DataCenter/Questionbank.json";

const BlogModal = ({ blog, onClose }: { blog: any, onClose: () => void }) => {
    if (!blog) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
            <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg overflow-hidden max-w-[60rem] w-full p-6">
                <div>
                    <img src={blog.image} alt="recycling" className={`w-[110rem] h-[33.6rem] object-cover rounded-lg`} />
                </div>
                <div>
                <h3 className="font-heading text-lg font-semibold tracking-tight leading-6 text-gray-900 mb-2">
                    {blog.title}
                </h3>
                <h5 className="text-sm font-semibold tracking-tight leading-6 text-gray-500 mb-4">
                    {blog.author} | {blog.date}
                </h5>
                <p className="text-base text-gray-700">
                    {blog.description[0].content1}
                    <br />
                    <br />
                    {blog.description[1].content2}
                    <br />
                    <br />
                    {blog.description[2].content3}
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 w-[10rem] py-2 text-sm font-semibold tracking-tight leading-6 text-white bg-orange-500 hover:bg-orange-600 rounded-full"
                >
                    Close
                </button>
                </div>
            </div>
        </div>
    );
};

const Blogs = () => {
    const { dark } = useContext(DarkModeContext) || {};
    const [selectedBlog, setSelectedBlog] = useState(null);

    const openModal = (blog: any) => {
        setSelectedBlog(blog);
    };

    const closeModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className={`py-12 ${dark ? 'bg-[#141111EB]' : 'bg-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2
                        className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                        Latest Blogs
                    </h2>
                    <p className={`font-heading mt-2 text-[2.5rem] leading-8 font-medium tracking-tight ${dark ? 'text-gray-300' : 'text-gray-900'} sm:text-4xl`}>
                        Our Blog Posts 📝 
                    </p>
                    <p className={`mt-4 max-w-2xl text-lg ${dark ? 'text-gray-300' : 'text-gray-500'} lg:mx-auto`}>
                        Here are some of our latest blog posts. Stay tuned for more updates! 🌟
                    </p>
                </div>
            </div>
            <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {
                        Questionbank.Blogs.map((blog, index) => (
                            <div
                                key={index}
                                className={`rounded-lg overflow-hidden ${dark ? 'text-white' : 'text-gray-800'} lg:col-span-1`}>
                                <div className={`px-4 py-5 sm:p-6 ${dark ? 'bg-gradient-to-r to-[#bdc3c7] from-[#ADA996]':'bg-gradient-to-r from-[#C9D6FF] to-[#E2E2E2]'}`}>
                                    <img src={blog.image} alt="recycling" className="w-full h-32 object-cover rounded-lg" />
                                    <h3
                                        className="font-heading text-lg font-semibold tracking-tight leading-6 text-gray-900">
                                        {blog.title}
                                    </h3>
                                    <h5 className="flex gap-2 mt-2 text-sm font-semibold tracking-tight leading-6 text-gray-800">
                                        <svg fill="#322f2f" width="25px" height="25px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" stroke="#322f2f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9999 26.6875 C 31.3983 26.7109 34.1171 23.8047 34.1171 19.9844 C 34.1171 16.4219 31.3983 13.4453 27.9999 13.4453 C 24.6014 13.4453 21.8827 16.4219 21.8827 19.9844 C 21.8827 23.8047 24.6014 26.6641 27.9999 26.6875 Z M 17.0780 39.9766 L 38.8983 39.9766 C 39.8358 39.9766 40.3046 39.3437 40.3046 38.5 C 40.3046 35.8750 36.3671 29.1016 27.9999 29.1016 C 19.6327 29.1016 15.6952 35.8750 15.6952 38.5 C 15.6952 39.3437 16.1640 39.9766 17.0780 39.9766 Z"></path></g></svg>
                                        {blog.author}  |  {blog.date}
                                    </h5>
                                    <p className={`mt-2 text-base ${dark ? 'text-gray-800' : 'text-gray-700'}`}>
                                        {blog.description[0].content1?.slice(0, 100) ?? "..."}. . .
                                    </p>
                                </div>
                                <button
                                    onClick={() => openModal(blog)}
                                    className={`w-full py-2 text-sm font-semibold tracking-tight leading-6 text-white bg-[#31363F] hover:bg-[#222831]`}
                                >
                                    Read more
                                </button>
                            </div>
                        )).slice(0, 3)
                    }
                </div>
            </div>
            <BlogModal blog={selectedBlog} onClose={closeModal} />
        </div>
    );
};

export default Blogs;
