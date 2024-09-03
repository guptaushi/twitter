import React from "react";
import { FaBookmark, FaHashtag, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link } from "react-router-dom";


const LeftSidebar = () => {
    return (
        <div className="w-[20%]">
            <div>
                <div>
                    <img
                        className="ml-5"
                        width={"24px"}
                        src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png"
                        alt="twitter-logo"
                    />
                </div>
                <div className="my-4">
                    <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                            <FaHome size="24px" />
                        </div>
                        <h1 className="font-bold text-lg ml-2">Home</h1>
                    </Link>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                            <FaHashtag size="24px" />
                        </div>
                        <h1 className="font-bold text-lg ml-2">Explore</h1>
                    </div>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                            <MdOutlineNotificationsActive size="24px" />
                        </div>
                        <h1 className="font-bold text-lg ml-2">Notifications</h1>
                    </div>
                    <Link to= "/profile"className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                            <CgProfile size="24px" />
                        </div>
                        <h1 className="font-bold text-lg ml-2">Profile</h1>
                    </Link>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                            <FaBookmark size="24px" />
                        </div>
                        <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
                    </div>
                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                        <div>
                            <CgLogOut size="24px" />
                        </div>
                        <h1 className="font-bold text-lg ml-2">Logout</h1>
                    </div>
                    <button className="px-4 py-2 border-none text-md bg-[#c95238] w-full rounded-full text-white font-bold">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};
export default LeftSidebar;
